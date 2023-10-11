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
          puzzle: Json
        }
        Insert: {
          author?: string
          created_at?: string
          id?: number
          puzzle: Json
        }
        Update: {
          author?: string
          created_at?: string
          id?: number
          puzzle?: Json
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
