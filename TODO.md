# TODO - Checklist de Implementação CVAutoStyle

## 📋 Documentação e Planeamento

- [ ] Criar PRD.md com todas as especificações do projeto
- [ ] Validar PRD.md como fonte única de verdade

## 🏗️ Estrutura Base do Projeto

- [ ] Criar package.json com dependências (Next.js, TypeScript, Tailwind)
- [ ] Configurar tsconfig.json
- [ ] Configurar next.config.js
- [ ] Configurar tailwind.config.js com cores do PRD
- [ ] Configurar postcss.config.js
- [ ] Criar .gitignore
- [ ] Criar app/globals.css
- [ ] Criar app/layout.tsx com metadata SEO

## 🧩 Componentes Base

- [ ] Criar components/Navigation.tsx (navegação responsiva)
- [ ] Implementar menu mobile no Navigation
- [ ] Criar components/Footer.tsx
- [ ] Criar components/TestimonialCard.tsx
- [ ] Garantir que todos os componentes são reutilizáveis

## 📄 Páginas - Home

- [ ] Criar app/page.tsx
- [ ] Implementar Hero com nome CVAutoStyle
- [ ] Adicionar tagline "A sua oficina automóvel de confiança na Praia"
- [ ] Adicionar CTAs principais: "Agendar Serviço" e "Ligar Agora"
- [ ] Implementar secção de serviços em destaque
- [ ] Implementar secção "Por que escolher a CVAutoStyle"
- [ ] Implementar testemunhos resumidos
- [ ] Adicionar CTA final
- [ ] Garantir responsividade mobile-first

## 📄 Páginas - Sobre Nós

- [ ] Criar app/sobre-nos/page.tsx
- [ ] Implementar secção de história da empresa
- [ ] Adicionar Missão, Visão e Valores
- [ ] Destaque para empresa local e familiar
- [ ] Criar área para fotos reais (placeholder)
- [ ] Adicionar metadata SEO

## 📄 Páginas - Serviços

- [ ] Criar app/servicos/page.tsx
- [ ] Implementar estrutura modular por serviço
- [ ] Adicionar serviço: Mecânica Geral
- [ ] Adicionar serviço: Diagnóstico Automóvel
- [ ] Adicionar serviço: Manutenção Preventiva
- [ ] Adicionar serviço: Travões & Suspensão
- [ ] Adicionar serviço: Pneus & Rodas
- [ ] Cada serviço com: título, descrição, benefícios, CTA
- [ ] Adicionar metadata SEO

## 📄 Páginas - Testemunhos

- [ ] Criar app/testemunhos/page.tsx
- [ ] Implementar lista de avaliações
- [ ] Incluir nome do cliente em cada testemunho
- [ ] Layout focado em credibilidade
- [ ] Adicionar metadata SEO

## 📄 Páginas - Contactos/Agendamento

- [ ] Criar app/contactos/page.tsx
- [ ] Criar app/contactos/layout.tsx com metadata
- [ ] Implementar formulário completo:
  - [ ] Campo Nome
  - [ ] Campo Telefone
  - [ ] Campo Email
  - [ ] Campo Serviço (select)
  - [ ] Campo Mensagem
- [ ] Implementar funcionalidade de submissão do formulário
- [ ] Adicionar feedback visual após submissão
- [ ] Implementar click-to-call
- [ ] Integrar Google Maps embed
- [ ] Adicionar horários de funcionamento
- [ ] Adicionar endereço completo
- [ ] Adicionar metadata SEO

## 🎨 Design e UX/UI

- [ ] Implementar design mobile-first
- [ ] Garantir navegação simples e intuitiva
- [ ] CTAs sempre visíveis em todas as páginas
- [ ] Aplicar cores base: azul escuro / cinza
- [ ] Aplicar cores CTA: laranja/amarelo
- [ ] Usar tipografia legível (Inter)
- [ ] Adicionar ícones automotivos (React Icons)
- [ ] Garantir responsividade total em todos os dispositivos

## 🔍 SEO e Localização

- [ ] Adicionar meta titles em todas as páginas
- [ ] Adicionar meta descriptions em todas as páginas
- [ ] Incluir keywords: "Oficina automóvel na Praia"
- [ ] Incluir keywords: "Reparação automóvel Praia"
- [ ] Incluir keywords: "Loja de pneus Praia"
- [ ] Garantir URLs amigáveis (Next.js App Router)
- [ ] Integrar Google Maps embed
- [ ] Otimizar para mobile (meta viewport)

## ⚡ Requisitos Não Funcionais

- [ ] Garantir performance (< 3s de carregamento)
- [ ] Implementar responsividade total
- [ ] Preparar para HTTPS (configuração Next.js)
- [ ] Código modular e escalável
- [ ] Acessibilidade básica (labels, aria-labels, semantic HTML)

## ✅ Validação Final

- [ ] Verificar que nenhuma funcionalidade foi implementada fora do PRD.md
- [ ] Validar todas as decisões contra o PRD.md
- [ ] Testar navegação entre páginas
- [ ] Verificar todos os links e CTAs
- [ ] Testar formulário de contacto
- [ ] Verificar responsividade em diferentes tamanhos de ecrã
- [ ] Executar linter e corrigir erros (se houver)
- [ ] Criar README.md com documentação do projeto

## 📝 Notas

- Google Maps: Atualizar com coordenadas reais quando disponíveis
- Formulário: Integrar com backend/API quando necessário
- Fotos: Substituir placeholders por fotos reais da oficina
- Contactos: Atualizar telefone e email com informações reais

