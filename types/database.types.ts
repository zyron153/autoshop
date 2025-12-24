export interface Database {
  public: {
    Tables: {
      contactos: {
        Row: {
          id: string
          nome: string
          telefone: string
          email: string
          servico: string | null
          mensagem: string
          created_at: string
        }
        Insert: {
          id?: string
          nome: string
          telefone: string
          email: string
          servico?: string | null
          mensagem: string
          created_at?: string
        }
        Update: {
          id?: string
          nome?: string
          telefone?: string
          email?: string
          servico?: string | null
          mensagem?: string
          created_at?: string
        }
      }
    }
  }
}

