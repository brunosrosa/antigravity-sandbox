const mysql = require('mysql2/promise');

async function setup() {
    try {
        const connection = await mysql.createConnection({ host: '127.0.0.1', port: 3306, user: 'root' });
        await connection.query('CREATE DATABASE IF NOT EXISTS dolt_db');
        await connection.query('USE dolt_db');
        await connection.query('CREATE TABLE IF NOT EXISTS issues (id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255))');
        await connection.query('INSERT INTO issues (title) VALUES ("Teste Dolt")');
        await connection.end();
        console.log("Banco de dados dolt_db preparado com a issue.");
    } catch (e) {
        console.error("Erro no Node:", e);
    }
}
setup();
