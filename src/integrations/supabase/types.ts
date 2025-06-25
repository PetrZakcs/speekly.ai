export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      badges: {
        Row: {
          color: string | null
          created_at: string | null
          criteria: Json | null
          description: string
          icon_url: string | null
          id: string
          is_active: boolean | null
          name: string
          points_value: number | null
          type: Database["public"]["Enums"]["badge_type"]
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          criteria?: Json | null
          description: string
          icon_url?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          points_value?: number | null
          type: Database["public"]["Enums"]["badge_type"]
        }
        Update: {
          color?: string | null
          created_at?: string | null
          criteria?: Json | null
          description?: string
          icon_url?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          points_value?: number | null
          type?: Database["public"]["Enums"]["badge_type"]
        }
        Relationships: []
      }
      challenge_participations: {
        Row: {
          challenge_id: string
          created_at: string | null
          id: string
          rank: number | null
          score: number | null
          status: string | null
          updated_at: string | null
          user_id: string
          video_id: string | null
        }
        Insert: {
          challenge_id: string
          created_at?: string | null
          id?: string
          rank?: number | null
          score?: number | null
          status?: string | null
          updated_at?: string | null
          user_id: string
          video_id?: string | null
        }
        Update: {
          challenge_id?: string
          created_at?: string | null
          id?: string
          rank?: number | null
          score?: number | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenge_participations_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenge_participations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenge_participations_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      challenges: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string
          difficulty_level: number | null
          end_date: string | null
          id: string
          is_active: boolean | null
          is_featured: boolean | null
          max_participants: number | null
          prize_description: string | null
          start_date: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description: string
          difficulty_level?: number | null
          end_date?: string | null
          id?: string
          is_active?: boolean | null
          is_featured?: boolean | null
          max_participants?: number | null
          prize_description?: string | null
          start_date?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string
          difficulty_level?: number | null
          end_date?: string | null
          id?: string
          is_active?: boolean | null
          is_featured?: boolean | null
          max_participants?: number | null
          prize_description?: string | null
          start_date?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenges_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_active: boolean | null
          parent_id: string | null
          updated_at: string | null
          user_id: string
          video_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          parent_id?: string | null
          updated_at?: string | null
          user_id: string
          video_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          parent_id?: string | null
          updated_at?: string | null
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      follows: {
        Row: {
          created_at: string | null
          follower_id: string
          following_id: string
          id: string
        }
        Insert: {
          created_at?: string | null
          follower_id: string
          following_id: string
          id?: string
        }
        Update: {
          created_at?: string | null
          follower_id?: string
          following_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follows_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboard: {
        Row: {
          created_at: string | null
          id: string
          period: string
          period_end: string | null
          period_start: string | null
          points: number | null
          rank: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          period: string
          period_end?: string | null
          period_start?: string | null
          points?: number | null
          rank?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          period?: string
          period_end?: string | null
          period_start?: string | null
          points?: number | null
          rank?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          data: Json | null
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          id: string
          nickname: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          nickname?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          nickname?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      reactions: {
        Row: {
          comment_id: string | null
          created_at: string | null
          id: string
          type: Database["public"]["Enums"]["reaction_type"]
          user_id: string
          video_id: string | null
        }
        Insert: {
          comment_id?: string | null
          created_at?: string | null
          id?: string
          type: Database["public"]["Enums"]["reaction_type"]
          user_id: string
          video_id?: string | null
        }
        Update: {
          comment_id?: string | null
          created_at?: string | null
          id?: string
          type?: Database["public"]["Enums"]["reaction_type"]
          user_id?: string
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reactions_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          comment_id: string | null
          created_at: string | null
          description: string | null
          id: string
          reason: string
          reported_user_id: string | null
          reporter_id: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          video_id: string | null
        }
        Insert: {
          comment_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          reason: string
          reported_user_id?: string | null
          reporter_id: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          video_id?: string | null
        }
        Update: {
          comment_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          reason?: string
          reported_user_id?: string | null
          reporter_id?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reports_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_reported_user_id_fkey"
            columns: ["reported_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      stories: {
        Row: {
          content: string | null
          created_at: string | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          media_type: string | null
          media_url: string | null
          user_id: string
          view_count: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          media_type?: string | null
          media_url?: string | null
          user_id: string
          view_count?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          media_type?: string | null
          media_url?: string | null
          user_id?: string
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "stories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_activities: {
        Row: {
          activity_name: string | null
          activity_type: string
          completed_at: string
          created_at: string
          duration_minutes: number | null
          id: string
          user_id: string
        }
        Insert: {
          activity_name?: string | null
          activity_type: string
          completed_at?: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          user_id: string
        }
        Update: {
          activity_name?: string | null
          activity_type?: string
          completed_at?: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_id: string
          earned_at: string | null
          id: string
          progress: Json | null
          user_id: string
        }
        Insert: {
          badge_id: string
          earned_at?: string | null
          id?: string
          progress?: Json | null
          user_id: string
        }
        Update: {
          badge_id?: string
          earned_at?: string | null
          id?: string
          progress?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_badges_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean | null
          role: Database["public"]["Enums"]["user_role"] | null
          speekly_level: number | null
          speekly_points: number | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["user_role"] | null
          speekly_level?: number | null
          speekly_points?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["user_role"] | null
          speekly_level?: number | null
          speekly_points?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      videos: {
        Row: {
          challenge_id: string | null
          comment_count: number | null
          created_at: string | null
          description: string | null
          duration: number | null
          id: string
          is_active: boolean | null
          is_featured: boolean | null
          like_count: number | null
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          type: Database["public"]["Enums"]["video_type"] | null
          updated_at: string | null
          user_id: string
          video_url: string
          view_count: number | null
        }
        Insert: {
          challenge_id?: string | null
          comment_count?: number | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          is_active?: boolean | null
          is_featured?: boolean | null
          like_count?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          type?: Database["public"]["Enums"]["video_type"] | null
          updated_at?: string | null
          user_id: string
          video_url: string
          view_count?: number | null
        }
        Update: {
          challenge_id?: string | null
          comment_count?: number | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          is_active?: boolean | null
          is_featured?: boolean | null
          like_count?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          type?: Database["public"]["Enums"]["video_type"] | null
          updated_at?: string | null
          user_id?: string
          video_url?: string
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist_signups: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      badge_type:
        | "beginner"
        | "consistent"
        | "challenger"
        | "expert"
        | "community"
      reaction_type: "heart" | "encouragement" | "clap" | "fire"
      user_role: "user" | "expert" | "admin"
      video_type: "challenge" | "free" | "story"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      badge_type: [
        "beginner",
        "consistent",
        "challenger",
        "expert",
        "community",
      ],
      reaction_type: ["heart", "encouragement", "clap", "fire"],
      user_role: ["user", "expert", "admin"],
      video_type: ["challenge", "free", "story"],
    },
  },
} as const
