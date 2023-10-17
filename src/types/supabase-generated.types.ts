export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      puzzles: {
        Row: {
          author: string
          created_at: string
          id: number
          solution: Json
        }
        Insert: {
          author?: string
          created_at?: string
          id?: number
          solution: Json
        }
        Update: {
          author?: string
          created_at?: string
          id?: number
          solution?: Json
        }
        Relationships: []
      }
    }
    Views: {
      random_puzzles: {
        Row: {
          author: string | null
          created_at: string | null
          id: number | null
          solution: Json | null
        }
        Insert: {
          author?: string | null
          created_at?: string | null
          id?: number | null
          solution?: Json | null
        }
        Update: {
          author?: string | null
          created_at?: string | null
          id?: number | null
          solution?: Json | null
        }
        Relationships: []
      }
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
