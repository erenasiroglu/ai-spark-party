
-- Fix 1: Remove misleading service_role JWT-claim policy on app_config.
-- Service role bypasses RLS at the database level; this policy is bypassable
-- if a JWT with a forged 'role' claim is presented.
DROP POLICY IF EXISTS "Allow service role write" ON public.app_config;

-- Fix 2: profiles - add INSERT and DELETE policies scoped to the owner.
CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete their own profile"
ON public.profiles FOR DELETE
TO authenticated
USING (auth.uid() = id);

-- Fix 3: Restrict user_cards policies to authenticated role only (not anon).
DROP POLICY IF EXISTS "Users can view their own cards" ON public.user_cards;
DROP POLICY IF EXISTS "Users can create their own cards" ON public.user_cards;
DROP POLICY IF EXISTS "Users can update their own cards" ON public.user_cards;
DROP POLICY IF EXISTS "Users can delete their own cards" ON public.user_cards;

CREATE POLICY "Users can view their own cards"
ON public.user_cards FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own cards"
ON public.user_cards FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cards"
ON public.user_cards FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cards"
ON public.user_cards FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Fix 4: Set fixed search_path on all functions and revoke public EXECUTE
-- on SECURITY DEFINER functions (handle_new_user is a trigger function only).

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.set_card_type_name_on_insert()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  SELECT name INTO NEW.card_type_name
  FROM card_types
  WHERE id = NEW.card_type_id;
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_card_type_name_on_card_update()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  IF NEW.card_type_id IS DISTINCT FROM OLD.card_type_id THEN
    SELECT name INTO NEW.card_type_name
    FROM card_types
    WHERE id = NEW.card_type_id;
  END IF;
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_cards_when_card_type_name_changes()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  IF NEW.name IS DISTINCT FROM OLD.name THEN
    UPDATE cards
    SET card_type_name = NEW.name
    WHERE card_type_id = NEW.id;
  END IF;
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.profiles (id) VALUES (NEW.id);
  RETURN NEW;
END;
$function$;

-- Revoke EXECUTE from anon and authenticated on all these functions.
-- They are trigger functions and should not be callable via the API.
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.set_card_type_name_on_insert() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_card_type_name_on_card_update() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_cards_when_card_type_name_changes() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, PUBLIC;
