# 📋 TEST PLAN: Crash Tests do Antigravity

Este documento lista as provas de conceito cronológicas do laboratório. O agente deve focar em completar um nível com sucesso absoluto (exit code zero) antes de passar para o próximo.

## Nível 1: O Teste de Pulsação (Rust Nativo no Windows)

- [ ] Criar uma pasta `/nivel-1-rust`.
- [ ] Inicializar um projeto Rust simples (`cmd /c cargo init`).
- [ ] Criar um script que leia um arquivo `.txt` local e imprima seu conteúdo no terminal.
- [ ] Objetivo: Validar a instalação do C++ Build Tools e a compilação do `rustc` via IDE sem erros de variáveis de ambiente.

## Nível 2: O Teste de Integração e Concorrência (Ecossistema Beads e SQLite)

- [ ] Criar uma pasta `/nivel-2-beads`.
- [ ] Inicializar o ambiente beads via terminal (`cmd /c bd init`).
- [ ] O agente deve criar um pequeno script Rust (usando `rusqlite` ou `sqlx`) que tente se conectar em leitura ao cache gerado pelo Beads (`.beads/beads.db`).
- [ ] **Crucial:** O script Rust DEVE injetar as pragmas para habilitar a concorrência assíncrona tolerante a falhas exigida pelo Windows:
      `PRAGMA journal_mode=WAL; PRAGMA synchronous=NORMAL; PRAGMA wal_autocheckpoint=1000;`
- [ ] O agente deve usar a CLI do Beads em paralelo para criar issues e demonstrar que o script Rust não sofre "File Lock" (bloqueio de banco de dados).
- [ ] Objetivo: Validar a estabilidade da leitura simultânea (Rust) e escrita (Go) em NTFS.

## Nível 3: A Prova de Fogo do Docker (MCP Connection)

- [ ] Criar uma pasta `/nivel-3-mcp`.
- [ ] Configurar um arquivo `docker-compose.yml` básico para rodar um servidor MCP local na porta 3000 (ex: fetch MCP).
- [ ] Utilizar a flag `--add-host=host.docker.internal:host-gateway` para garantir comunicação.
- [ ] Fornecer as instruções ao usuário de como plugar isso nas configurações do Antigravity.
- [ ] Objetivo: Validar a visibilidade de rede entre o host Windows e as VMs do Docker Desktop.

## Nível 4: Vibe Coding Visual (React + Framer Motion)

- [ ] Criar uma pasta `/nivel-4-ui`.
- [ ] Gerar uma página HTML pura (ou setup Vite rápido) que injete React, Tailwind e Framer Motion.
- [ ] Desenhar um "Card de Kanban" que desliza suavemente para a tela.
- [ ] Objetivo: Validar a capacidade da IA de gerar micro-animações visuais fluidas sem poluir o código.
