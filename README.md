# 🧫 Antigravity Sandbox (R&D Lab)

Laboratório contínuo de Pesquisa e Desenvolvimento (P&D) e Provas de Conceito (PoC) para a orquestração de Inteligência Artificial via Google Antigravity IDE.

Este ambiente é estritamente dedicado à validação de arquiteturas, integração de *Skills* (MCPs, CLI tools) e mitigação de falhas em ambiente **Windows 10/11 Nativo** antes da sua integração no projeto principal (*Genesis - Mission Control*).

## 🎯 Filosofia do Laboratório

O ecossistema agêntico evolui diariamente. Em vez de poluir a base de código de produção com ferramentas não testadas, este Sandbox serve como o "filtro de qualidade". Qualquer ferramenta (como o modelo BMad, RAG engines, ou orquestradores TDD) deve ser primeiramente clonada, dissecada e testada aqui. Só o que for considerado resiliente, rápido e seguro recebe o "Protocolo de Graduação" para o *Genesis*.

## 🛡️ Doutrina de Isolamento

Este não é um repositório monolítico.

- Cada experimento ou nível de teste vive numa pasta isolada na raiz.
- As pastas não partilham dependências lógicas (`package.json`, `Cargo.toml` ou `.venv` são estritamente independentes).
- Testes falhos, loops infinitos de agentes ou ambientes corrompidos devem ser sumariamente revertidos via Git ou deletados, sem afetar a árvore principal.

## 📋 Sprint de Validação Atual (Fundação Genesis)

Neste momento, o laboratório está focado em validar os pilares físicos do futuro SO:

1. **Compilação Nativa:** Interoperabilidade Rust/Tauri com o MSVC no Windows.
2. **Memória de Estado:** Testes de concorrência SQLite em modo WAL integrando o binário `steveyegge/beads`.
3. **Telemetria Isolada:** Conexões Docker MCP contornando o loopback do Hyper-V (`host.docker.internal`).

## 📜 Regras em Vigor

A execução neste laboratório é governada de forma inflexível pelos ficheiros nas pastas de regras do projeto, que impõem restrições anti-alucinação, prevenção de *Terminal Hanging* (`cmd /c`) e higiene de codificação (UTF-8) específicas para anular a entropia natural do Windows.
