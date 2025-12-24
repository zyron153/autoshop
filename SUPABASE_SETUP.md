# Configuração do Supabase

Este guia explica como configurar o Supabase para o projeto CVAutoStyle.

## 📋 Pré-requisitos

1. Conta no [Supabase](https://supabase.com)
2. Um projeto criado no Supabase

## 🔧 Passo a Passo

### 1. Criar o Projeto no Supabase

1. Aceda a [supabase.com](https://supabase.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Preencha os dados do projeto:
   - Nome do projeto
   - Password do banco de dados
   - Região (escolha a mais próxima)
5. Aguarde a criação do projeto (pode levar alguns minutos)

### 2. Criar a Tabela de Contactos

1. No dashboard do Supabase, vá para **SQL Editor** (ícone no menu lateral)
2. Clique em **New Query**
3. Copie e cole o conteúdo do arquivo `supabase/schema.sql`
4. Clique em **Run** para executar o script
5. Verifique se a tabela foi criada:
   - Vá para **Table Editor**
   - Deve ver a tabela `contactos` listada

### 3. Configurar Variáveis de Ambiente

1. No dashboard do Supabase, vá para **Settings** → **API**
2. Copie os seguintes valores:
   - **Project URL** (será `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (será `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

3. No projeto local, crie o arquivo `.env.local` na raiz:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-public
   ```

4. **Importante:** O arquivo `.env.local` já está no `.gitignore` e não será commitado

### 4. Verificar a Configuração

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Aceda à página de contactos: `http://localhost:3000/contactos`

3. Preencha e submeta o formulário

4. No Supabase, vá para **Table Editor** → **contactos**
5. Deve ver o novo contacto na tabela

## 🔒 Segurança

O schema SQL inclui Row Level Security (RLS) configurado para:

- **Inserção pública:** Qualquer pessoa pode inserir dados (necessário para formulários)
- **Leitura administrativa:** Apenas o service role pode ler todos os dados

Para aceder aos dados como administrador:
1. Use o **service_role** key (nunca exponha isso no frontend!)
2. Ou crie políticas RLS personalizadas conforme necessário

## 📊 Estrutura da Tabela

A tabela `contactos` tem a seguinte estrutura:

| Coluna      | Tipo      | Descrição                    |
|-------------|-----------|------------------------------|
| id          | UUID      | Identificador único          |
| nome        | TEXT      | Nome do cliente (obrigatório)|
| telefone    | TEXT      | Telefone (obrigatório)       |
| email       | TEXT      | Email (obrigatório)          |
| servico     | TEXT      | Serviço de interesse (opcional)|
| mensagem    | TEXT      | Mensagem (obrigatório)        |
| created_at  | TIMESTAMP | Data de criação (automático) |

## 🐛 Troubleshooting

### Erro: "Invalid API key"
- Verifique se as variáveis de ambiente estão corretas
- Certifique-se de que está usando a chave **anon public**, não a **service_role**

### Erro: "relation does not exist"
- Execute o script SQL novamente no SQL Editor
- Verifique se a tabela foi criada na base de dados correta

### Erro: "new row violates row-level security policy"
- Verifique se as políticas RLS estão configuradas corretamente
- Certifique-se de que a política "Allow public inserts" está ativa

## 📚 Recursos Adicionais

- [Documentação do Supabase](https://supabase.com/docs)
- [Guia de Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [JavaScript Client Library](https://supabase.com/docs/reference/javascript/introduction)

