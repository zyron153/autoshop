# CVAutoStyle - Website Institucional

Website institucional profissional para a **CVAutoStyle**, uma oficina automóvel e loja de pneus (gestão familiar) localizada na **Praia, Ilha de Santiago, Cabo Verde**.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido seguindo rigorosamente o **PRD.md** (Product Requirements Document), que serve como fonte única de verdade para todas as decisões técnicas, funcionais e de design.

### Objetivo do Website

Gerar contactos e agendamentos, transmitir confiança, apresentar serviços e facilitar o contacto local.

### Objetivos Primários

- Aumentar visibilidade local
- Gerar pedidos de contacto e agendamentos
- Facilitar comunicação com clientes
- Reforçar confiança e profissionalismo

### Proposta de Valor

> "A CVAutoStyle oferece serviços automóveis confiáveis, com atendimento próximo, transparência e qualidade, servindo a comunidade da Praia com profissionalismo."

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **Supabase** (Banco de dados)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/zyron153/autoshop.git
cd autoshop
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o Supabase:
   - Crie uma conta no [Supabase](https://supabase.com)
   - Crie um novo projeto
   - Execute o schema SQL em `supabase/schema.sql` no SQL Editor do Supabase
   - Copie o arquivo `.env.local.example` para `.env.local`
   - Adicione as suas credenciais do Supabase:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📄 Estrutura do Projeto

```
├── app/
│   ├── page.tsx              # Página Home
│   ├── sobre-nos/
│   │   └── page.tsx          # Página Sobre Nós
│   ├── servicos/
│   │   └── page.tsx          # Página Serviços
│   ├── testemunhos/
│   │   └── page.tsx          # Página Testemunhos
│   ├── contactos/
│   │   ├── page.tsx          # Página Contactos/Agendamento
│   │   └── layout.tsx        # Layout com metadata
│   ├── layout.tsx            # Layout global
│   └── globals.css           # Estilos globais
├── components/
│   ├── Navigation.tsx        # Componente de navegação responsiva
│   ├── Footer.tsx             # Componente de rodapé
│   └── TestimonialCard.tsx   # Card de testemunho reutilizável
├── lib/
│   └── supabase.ts           # Cliente Supabase
├── types/
│   └── database.types.ts     # Tipos TypeScript para o banco de dados
├── supabase/
│   └── schema.sql            # Schema SQL para criar a tabela de contactos
├── PRD.md                     # Product Requirements Document
└── TODO.md                    # Checklist de implementação
```

## 🎯 Funcionalidades

### Páginas Implementadas

1. **Home** (`/`)
   - Hero com nome CVAutoStyle e tagline
   - CTAs principais: "Agendar Serviço" e "Ligar Agora"
   - Serviços em destaque
   - Secção "Por que escolher a CVAutoStyle"
   - Testemunhos resumidos
   - CTA final

2. **Sobre Nós** (`/sobre-nos`)
   - História da empresa
   - Missão, visão e valores
   - Destaque para empresa local e familiar
   - Área para fotos reais

3. **Serviços** (`/servicos`)
   - Mecânica Geral
   - Diagnóstico Automóvel
   - Manutenção Preventiva
   - Travões & Suspensão
   - Pneus & Rodas
   - Cada serviço com: título, descrição, benefícios e CTA

4. **Testemunhos** (`/testemunhos`)
   - Lista de avaliações de clientes
   - Nome do cliente em cada testemunho
   - Layout focado em credibilidade

5. **Contactos / Agendamento** (`/contactos`)
   - Formulário completo (nome, telefone, email, serviço, mensagem)
   - Integração com Supabase para armazenar contactos
   - Click-to-call
   - Google Maps embed
   - Horários de funcionamento
   - Endereço completo

### Características Técnicas

- ✅ Website totalmente responsivo (mobile-first)
- ✅ SEO local otimizado
- ✅ Integração com Google Maps
- ✅ CTAs sempre visíveis
- ✅ Design moderno e profissional
- ✅ Performance otimizada (< 3s)
- ✅ Código modular e escalável
- ✅ Acessibilidade básica
- ✅ Integração com Supabase para armazenamento de dados

## 🎨 Design

### Paleta de Cores

- **Base:** Azul escuro / Cinza (`#1e3a5f`, `#1f2937`)
- **CTAs:** Laranja (`#f97316`)
- **Texto:** Cinza escuro para legibilidade

### Tipografia

- **Fonte:** Inter (Google Fonts)
- **Ícones:** React Icons (ícones automotivos)

### Princípios de Design

- Mobile-first approach
- Navegação simples e intuitiva
- CTAs sempre visíveis
- Tipografia legível
- Ícones automotivos contextuais

## 🔍 SEO & Localização

### Palavras-chave Otimizadas

- "Oficina automóvel na Praia"
- "Reparação automóvel Praia"
- "Loja de pneus Praia"

### Implementações SEO

- Meta titles e descriptions em todas as páginas
- URLs amigáveis (Next.js App Router)
- Google Maps embed
- Otimização mobile
- Estrutura semântica HTML

## 📊 Métricas de Sucesso (KPIs)

- Submissões de formulário
- Cliques em "Ligar Agora"
- Tráfego orgânico local
- Taxa de conversão

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📝 Requisitos Não Funcionais

- ✅ Performance (< 3s de carregamento)
- ✅ Responsividade total
- ✅ Preparado para HTTPS
- ✅ Código modular e escalável
- ✅ Acessibilidade básica (labels, aria-labels, semantic HTML)

## 🎯 Público-Alvo

- Proprietários de veículos (ligeiros e comerciais)
- Residentes na Praia e arredores
- Idade: 25–65
- Maioritariamente utilizadores de smartphone
- Procuram rapidez, confiança e transparência

## ⚠️ Notas Importantes

- **Nenhuma funcionalidade foi implementada sem estar descrita no PRD.md**
- Todas as decisões técnicas foram validadas contra o PRD.md
- O projeto segue uma arquitetura modular e escalável
- Google Maps: Atualizar com coordenadas reais quando disponíveis
- Formulário: Integrar com backend/API quando necessário
- Fotos: Substituir placeholders por fotos reais da oficina
- Contactos: Atualizar telefone e email com informações reais

## 📚 Documentação

- **PRD.md** - Product Requirements Document completo
- **TODO.md** - Checklist de implementação

## 🗄️ Configuração do Supabase

### Criar a Tabela de Contactos

1. Aceda ao seu projeto no Supabase Dashboard
2. Vá para **SQL Editor**
3. Execute o script em `supabase/schema.sql` para criar a tabela `contactos`
4. A tabela será criada com as seguintes colunas:
   - `id` (UUID, primary key)
   - `nome` (TEXT, obrigatório)
   - `telefone` (TEXT, obrigatório)
   - `email` (TEXT, obrigatório)
   - `servico` (TEXT, opcional)
   - `mensagem` (TEXT, obrigatório)
   - `created_at` (TIMESTAMP, automático)

### Políticas de Segurança (RLS)

O schema inclui Row Level Security (RLS) configurado para:
- Permitir que qualquer pessoa insira dados (para formulários públicos)
- Permitir que o service role leia todos os dados (para acesso administrativo)

### Variáveis de Ambiente

Certifique-se de que o arquivo `.env.local` contém:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**⚠️ Importante:** Nunca commite o arquivo `.env.local` no Git. Ele já está no `.gitignore`.

## 📞 Contacto

Para questões sobre o projeto, consulte o **PRD.md** para entender os requisitos e escopo completo.

---

**Desenvolvido seguindo rigorosamente o PRD.md como fonte única de verdade.**
