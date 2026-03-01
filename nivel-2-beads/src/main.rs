use mysql::*;
use mysql::prelude::*;

fn main() -> Result<()> {
    // String de conexão para o Dolt SQL-server padrão
    let url = "mysql://root@127.0.0.1:3306/beads";
    
    // Adicionar log pragmático (Windows NAT)
    println!("Iniciando conexão à base Dolt (MySQL protocol) em {}", url);
    
    // Conectar usando um pool (adequado para concorrência)
    let pool = Pool::new(url)?;
    let mut conn = pool.get_conn()?;

    // Realizar a leitura da tabela issues criada no bd init/add bypass
    let issues: Vec<(i32, String)> = conn.query("SELECT id, title FROM issues")?;

    println!("Consultando issues ativas...");
    
    if issues.is_empty() {
        println!("Nenhuma issue encontrada.");
    } else {
        for (id, title) in issues {
            println!("Issue recebida [ID: {}] | Título: {}", id, title);
        }
    }
    
    println!("Teste Nível 2 - Leitura de Banco em Execução Paralela OK.");
    
    Ok(())
}
