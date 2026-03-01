const http = require('http');

console.log("[Host Windows] Disparando requisição para http://localhost:3000...");

const req = http.get('http://localhost:3000', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`[Host Windows] Status Code recebido: ${res.statusCode}`);
        console.log(`[Host Windows] Response JSON: ${data}`);
        if (res.statusCode === 200) {
            console.log("\n✅ Teste Nível 3 Concluído - Tráfego de porta Windows-Docker via extra_hosts operando perfeitamente.");
            process.exit(0);
        } else {
            console.error("\n❌ Falha na resposta (Status code incorreto).");
            process.exit(1);
        }
    });
});

req.on('error', (err) => {
    console.error(`\n❌ Falha de Rede: O Windows não alcançou o container. Erro interno: ${err.message}`);
    process.exit(1);
});
