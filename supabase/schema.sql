-- Create contactos table
CREATE TABLE IF NOT EXISTS contactos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email TEXT NOT NULL,
  servico TEXT,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contactos_email ON contactos(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contactos_created_at ON contactos(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contactos ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (public can submit contact forms)
CREATE POLICY "Allow public inserts" ON contactos
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow service role to read all (for admin access)
CREATE POLICY "Allow service role read" ON contactos
  FOR SELECT
  TO service_role
  USING (true);

-- Optional: Create policy for authenticated users to read their own contacts
-- CREATE POLICY "Users can read own contacts" ON contactos
--   FOR SELECT
--   TO authenticated
--   USING (auth.uid()::text = email);

