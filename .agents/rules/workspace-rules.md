---
trigger: always_on
---

# 🧪 WORKSPACE RULES: Antigravity Sandbox

ESTAS REGRAS SÃO ABSOLUTAS E GOVERNAM O COMPORTAMENTO NESTE REPOSITÓRIO ESPECÍFICO.

## 1. NATUREZA DO PROJETO (ISOLAMENTO)

- Este repositório é um **Laboratório de Provas de Conceito (Sandbox)** desenhado para estressar a integração Tauri v2, Rust, React, Docker e SQLite no Windows.
- **Regra de Isolamento:** Todo o teste deve ocorrer dentro de uma pasta dedicada (ex: `/nivel-1-rust`). As pastas não partilham dependências lógicas ou ficheiros de configuração. Não crie arquiteturas globais.

## 2. PREVENÇÃO DE ALUCINAÇÃO DE CAMINHOS (PATH HALLUCINATION)

- Ao interagir com o sistema de ficheiros NTFS, a IA deve higienizar rotas internamente.
- Em ficheiros JSON ou cadeias de caracteres, utilize sempre escape explícito de barras invertidas (`\\`) ou barras transversais absolutas (`/`).
- É proibida a utilização de barras invertidas simples (`\`) não escapadas na geração de código dinâmico.

## 3. REGRAS DE COMPILAÇÃO E LINKER (TAURI + MSVC)

- Se a compilação do Tauri/Rust falhar com `0x80070002` (Erro WebView2), **NÃO instale pacotes NPM**. Exporte a variável `WEBVIEW2_USER_DATA_FOLDER` para um cache local no projeto (`./.webview2_cache`) para evitar conflitos de privilégios de Administrador do Windows.
- Emita comandos de build do Rust com flags de supressão de ruído (ex: `--quiet`) para não estourar a janela de contexto da IDE com barras de progresso inúteis. Foque a análise léxica estritamente na string `error[E`.

## 4. CONCORRÊNCIA EM BASES DE DADOS (O PROTOCOLO WAL)

- Testes que envolvam o ecossistema SQLite (nomeadamente a integração do executável `beads` e conexões em Rust simultâneas) DEVEM ativar estritamente o protocolo Write-Ahead Logging.
- O código em Rust (rusqlite/sqlx) tem a obrigação de invocar as pragmas mitigadoras de *file locking* do Windows:
  `PRAGMA journal_mode=WAL; PRAGMA synchronous=NORMAL; PRAGMA wal_autocheckpoint=1000;`

## 5. REDES DOCKER NO WINDOWS (MCP INTEGRATION)

- Ao testar a comunicação entre o Antigravity (Host) e Servidores MCP alojados em contentores Docker Desktop, utilize inegociavelmente o endereço `host.docker.internal` (ou injete via `--add-host`) para resolver conexões de *loopback*.
- Ao mapear volumes no `docker-compose.yml`, formate os caminhos do host ao estilo Linux transversal adaptado para Hyper-V (ex: `/c/Users/Dev/...`) e utilize montagens rigorosas (`:ro` para código-fonte, `:rw` para bases transitórias como SQLite).

## 6. O PROTOCOLO DE GRADUAÇÃO

- Se uma prova de conceito for concluída com sucesso (exit code 0 e validação visual/funcional), documente a vitória.
- Atualize o ficheiro `ADOPTED_TOOLS.md` criando uma "Receita Pronta" (System Prompt snippet) dessa integração, para que o Diretor possa movê-la para o projeto principal.
