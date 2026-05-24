export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      app_config: {
        Row: {
          key: string
          value: string
        }
        Insert: {
          key: string
          value: string
        }
        Update: {
          key?: string
          value?: string
        }
        Relationships: []
      }
      card_types: {
        Row: {
          created_at: string | null
          description: string | null
          icon_url: string | null
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          icon_url?: string | null
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          icon_url?: string | null
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      cards: {
        Row: {
          card_type_id: string
          card_type_name: string
          created_at: string | null
          forbidden_words: Json
          forbidden_words_es: Json | null
          forbidden_words_tr: Json | null
          id: string
          word: string
          word_es: string | null
          word_tr: string | null
        }
        Insert: {
          card_type_id: string
          card_type_name: string
          created_at?: string | null
          forbidden_words?: Json
          forbidden_words_es?: Json | null
          forbidden_words_tr?: Json | null
          id?: string
          word: string
          word_es?: string | null
          word_tr?: string | null
        }
        Update: {
          card_type_id?: string
          card_type_name?: string
          created_at?: string | null
          forbidden_words?: Json
          forbidden_words_es?: Json | null
          forbidden_words_tr?: Json | null
          id?: string
          word?: string
          word_es?: string | null
          word_tr?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cards_card_type_id_fkey"
            columns: ["card_type_id"]
            isOneToOne: false
            referencedRelation: "card_types"
            referencedColumns: ["id"]
          },
        ]
      }
      game_actions: {
        Row: {
          action_type: string
          card_id: string | null
          card_word: string | null
          created_at: string | null
          game_id: string
          id: string
          round_number: number
          score_after: number
          score_before: number
          team_number: number
        }
        Insert: {
          action_type: string
          card_id?: string | null
          card_word?: string | null
          created_at?: string | null
          game_id: string
          id?: string
          round_number: number
          score_after: number
          score_before: number
          team_number: number
        }
        Update: {
          action_type?: string
          card_id?: string | null
          card_word?: string | null
          created_at?: string | null
          game_id?: string
          id?: string
          round_number?: number
          score_after?: number
          score_before?: number
          team_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "game_actions_card_id_fkey"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "game_actions_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      game_sessions: {
        Row: {
          current_card_index: number
          current_round: number
          current_team: number
          game_id: string
          id: string
          pass_count: number
          team1_score: number
          team2_score: number
          time_left: number
          updated_at: string | null
          used_card_ids: Json
        }
        Insert: {
          current_card_index?: number
          current_round?: number
          current_team?: number
          game_id: string
          id?: string
          pass_count?: number
          team1_score?: number
          team2_score?: number
          time_left: number
          updated_at?: string | null
          used_card_ids?: Json
        }
        Update: {
          current_card_index?: number
          current_round?: number
          current_team?: number
          game_id?: string
          id?: string
          pass_count?: number
          team1_score?: number
          team2_score?: number
          time_left?: number
          updated_at?: string | null
          used_card_ids?: Json
        }
        Relationships: [
          {
            foreignKeyName: "game_sessions_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: true
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      games: {
        Row: {
          card_type_id: string
          challenge_enabled: boolean
          challenge_id: string | null
          created_at: string | null
          game_language: string | null
          game_time: number
          id: string
          pass_limit: number
          rounds: number
          status: string
          team1_name: string
          team2_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          card_type_id: string
          challenge_enabled?: boolean
          challenge_id?: string | null
          created_at?: string | null
          game_language?: string | null
          game_time: number
          id?: string
          pass_limit: number
          rounds: number
          status?: string
          team1_name: string
          team2_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          card_type_id?: string
          challenge_enabled?: boolean
          challenge_id?: string | null
          created_at?: string | null
          game_language?: string | null
          game_time?: number
          id?: string
          pass_limit?: number
          rounds?: number
          status?: string
          team1_name?: string
          team2_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "games_card_type_id_fkey"
            columns: ["card_type_id"]
            isOneToOne: false
            referencedRelation: "card_types"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          ai_credits: number | null
          created_at: string | null
          email: string | null
          first_open_ai_bonus_claimed: boolean
          gift_unlocked_card_type: string | null
          id: string
          is_pro: boolean | null
          onboarding_completed_at: string | null
          onboarding_data: Json | null
          onboarding_skipped: boolean
        }
        Insert: {
          ai_credits?: number | null
          created_at?: string | null
          email?: string | null
          first_open_ai_bonus_claimed?: boolean
          gift_unlocked_card_type?: string | null
          id: string
          is_pro?: boolean | null
          onboarding_completed_at?: string | null
          onboarding_data?: Json | null
          onboarding_skipped?: boolean
        }
        Update: {
          ai_credits?: number | null
          created_at?: string | null
          email?: string | null
          first_open_ai_bonus_claimed?: boolean
          gift_unlocked_card_type?: string | null
          id?: string
          is_pro?: boolean | null
          onboarding_completed_at?: string | null
          onboarding_data?: Json | null
          onboarding_skipped?: boolean
        }
        Relationships: []
      }
      user_cards: {
        Row: {
          card_type_id: string
          created_at: string | null
          forbidden_words: Json
          forbidden_words_tr: Json | null
          id: string
          other_languages_forbidden_words: Json | null
          other_languages_word: Json | null
          user_id: string
          word: string
          word_tr: string | null
        }
        Insert: {
          card_type_id: string
          created_at?: string | null
          forbidden_words?: Json
          forbidden_words_tr?: Json | null
          id?: string
          other_languages_forbidden_words?: Json | null
          other_languages_word?: Json | null
          user_id: string
          word: string
          word_tr?: string | null
        }
        Update: {
          card_type_id?: string
          created_at?: string | null
          forbidden_words?: Json
          forbidden_words_tr?: Json | null
          id?: string
          other_languages_forbidden_words?: Json | null
          other_languages_word?: Json | null
          user_id?: string
          word?: string
          word_tr?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_cards_card_type_id_fkey"
            columns: ["card_type_id"]
            isOneToOne: false
            referencedRelation: "card_types"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
