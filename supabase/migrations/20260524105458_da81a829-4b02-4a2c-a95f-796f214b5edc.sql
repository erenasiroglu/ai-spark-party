
-- card_types: keep public read; restrict owner-scoped policies to authenticated.
DROP POLICY IF EXISTS "Users can view their own card types" ON public.card_types;
DROP POLICY IF EXISTS "Users can create their own card types" ON public.card_types;
DROP POLICY IF EXISTS "Users can update their own card types" ON public.card_types;
DROP POLICY IF EXISTS "Users can delete their own card types" ON public.card_types;

CREATE POLICY "Users can view their own card types"
ON public.card_types FOR SELECT TO authenticated
USING ((user_id = auth.uid()) OR (user_id IS NULL));

CREATE POLICY "Users can create their own card types"
ON public.card_types FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own card types"
ON public.card_types FOR UPDATE TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own card types"
ON public.card_types FOR DELETE TO authenticated
USING (auth.uid() = user_id);

-- game_actions
DROP POLICY IF EXISTS "Users can view their own game actions" ON public.game_actions;
DROP POLICY IF EXISTS "Users can create their own game actions" ON public.game_actions;

CREATE POLICY "Users can view their own game actions"
ON public.game_actions FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM games WHERE games.id = game_actions.game_id AND games.user_id = auth.uid()));

CREATE POLICY "Users can create their own game actions"
ON public.game_actions FOR INSERT TO authenticated
WITH CHECK (EXISTS (SELECT 1 FROM games WHERE games.id = game_actions.game_id AND games.user_id = auth.uid()));

-- game_sessions
DROP POLICY IF EXISTS "Users can view their own game sessions" ON public.game_sessions;
DROP POLICY IF EXISTS "Users can create their own game sessions" ON public.game_sessions;
DROP POLICY IF EXISTS "Users can update their own game sessions" ON public.game_sessions;
DROP POLICY IF EXISTS "Users can delete their own game sessions" ON public.game_sessions;

CREATE POLICY "Users can view their own game sessions"
ON public.game_sessions FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM games WHERE games.id = game_sessions.game_id AND games.user_id = auth.uid()));

CREATE POLICY "Users can create their own game sessions"
ON public.game_sessions FOR INSERT TO authenticated
WITH CHECK (EXISTS (SELECT 1 FROM games WHERE games.id = game_sessions.game_id AND games.user_id = auth.uid()));

CREATE POLICY "Users can update their own game sessions"
ON public.game_sessions FOR UPDATE TO authenticated
USING (EXISTS (SELECT 1 FROM games WHERE games.id = game_sessions.game_id AND games.user_id = auth.uid()));

CREATE POLICY "Users can delete their own game sessions"
ON public.game_sessions FOR DELETE TO authenticated
USING (EXISTS (SELECT 1 FROM games WHERE games.id = game_sessions.game_id AND games.user_id = auth.uid()));

-- games
DROP POLICY IF EXISTS "Users can view their own games" ON public.games;
DROP POLICY IF EXISTS "Users can create their own games" ON public.games;
DROP POLICY IF EXISTS "Users can update their own games" ON public.games;
DROP POLICY IF EXISTS "Users can delete their own games" ON public.games;

CREATE POLICY "Users can view their own games"
ON public.games FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own games"
ON public.games FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own games"
ON public.games FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own games"
ON public.games FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- profiles
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;

CREATE POLICY "Users can view own profile"
ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can delete their own profile"
ON public.profiles FOR DELETE TO authenticated USING (auth.uid() = id);
