const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`[Container] Recebida a requisição de: ${req.connection.remoteAddress}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        status: "success",
        message: "Conexão MCP mock recebida com sucesso vindo do Host Windows!",
        remote_address: req.connection.remoteAddress
    }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`[Container] Servidor Mock MCP iniciado na porta ${PORT}. Aguardando conexões do host...`);
});
