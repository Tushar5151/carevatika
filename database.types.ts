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
      capstone: {
        Row: {
          contact_number: string | null
          email_id: string
          hardware_number: string | null
          id: number
          micellaneous: string | null
        }
        Insert: {
          contact_number?: string | null
          email_id: string
          hardware_number?: string | null
          id?: number
          micellaneous?: string | null
        }
        Update: {
          contact_number?: string | null
          email_id?: string
          hardware_number?: string | null
          id?: number
          micellaneous?: string | null
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
