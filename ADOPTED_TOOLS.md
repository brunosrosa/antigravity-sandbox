# 🚀 Antigravity Sandbox: Protocolo de Graduação

Este documento contém as **Receitas Prontas (System Prompts e Snippets)** validadas cabalmente contra o ambiente hostile Windows 10/11 + HyperV + NTFS durante as provas do Antigravity Sandbox.
Toda operação no projeto principal deve herdar estes padrões para evitar loops de correção em infraestrutura.

---

## 📌 1. A Regra do Shell e Encoding (Windows Native Protocol)
>
> **Problema Resolvido:** Travamentos silenciosos de shell async da extensão na IDE e arquivos corrompidos de acentuação (UTF-8).

**Snippet/Comando Obrigatório:**

- **Injeção de Processos:** TODO comando executado na máquina host deve ser prefixado por `cmd /c "comando..."`. Não utilizar PowerShell puro em `run_command` por falhas de escaping ou cmdlets x86.
- **Redirecionamentos:** Evitar `echo dados > ficheiro`. Utilizar `write_to_file` da engine ou `write_file` em node.js.
- **Node.js Scripts:** Usar `fs.writeFileSync(path, data, { encoding: 'utf-8' })` rigorosamente.

---

## 📌 2. O Padrão de Conexão MySQL / Beads-Dolt (Protocolo de Loopback)
>
> **Problema Resolvido:** Falsos positivos de Lock (*OS Error 32*) sob MSVC Compiler em diretórios locais na porta 3306 e rejeição ativa do TCP Loopback do Windows (*OS Error 10061*).

**Snippet/Procedimento Obrigatório (Rust Client):**

- **Fallback de URL IPV4:** Rejeite `localhost` como hostname. Force `mysql://root@127.0.0.1:3306/dolt_db` na string do driver para contornar resoluções de socket nativas não tratadas.
- **Wait-Macro (Graceful Sleep):** A inicialização do serviço dolt (`dolt sql-server`) em segundo plano demora segundos no Windows. O Cliente deve aguardar proativamente:

```rust
println!("Aguardando warmup do servidor (5s)...");
std::thread::sleep(std::time::Duration::from_secs(5));
// Iniciar a pool de conexão imediatamente à seguir
```

- **Injeção DDL Segura:** O isolamento do schema e tabela via setup-script Node/JS é muito mais confiável para bootstraping (*Test DB Injection*) do que usar a command-line em powershell.

---

## 📌 3. Docker-to-Host Gateway (A Ponte MCP)
>
> **Problema Resolvido:** O Docker Desktop em Hyper-V/WSL2 bloqueia rotas para o localhost do Windows (*Host Machine*) onde os MCP Servers/Bots nativamente rodam.

**Snippet/Procedimento Obrigatório (docker-compose.yml):**
Para acessar APIs (ex: porta 3000) vindas de fora da rede Docker default, declare o buraco no `docker-compose.yml` da seguinte forma:

```yaml
services:
  nome-app:
    extra_hosts:
      - "host.docker.internal:host-gateway"
```

**No Container:** O código Node.js ou Python passará a acessar a API do Host perfeitamente via `http://host.docker.internal:3000`.

---

## 📌 4. A Stack Frontend de Elite (Vibe Coding)
>
> **Problema Resolvido:** Degradação de produtividade inicializando React App, travamentos no pacote Vite durante setups interativos no terminal, e falha de build com dependências quebradas de design.

**Snippet/Procedimento Obrigatório:**

- **Scaffold Non-Interactive:** `cmd /c "npm create vite@latest nome-pasta -- --template react"`
- **Pacotes Essenciais:** `framer-motion`, `@tailwindcss/vite`, `tailwindcss`.
- **Setups:** Configure o `vite.config.js` estritamente aplicando o plugin do tailwind V4. Remova o `tailwind.config.js` pois não é mais usado na v4. As variáveis globais (Design Tokens e *Dark Mode*) entram diretamente no topo do `index.css`:

```css
@import "tailwindcss";

@theme {
  --color-dark-bg: #0f172a;
  /* e demais design systems... */
}
```

- **Build Seguro:** Exija e teste a lint com `cmd /c "npm run build"` para validação do exit code *0* da árvore de dependências importada (`index.css` carregando o tailwind theme base e bibliotecas animadas).
