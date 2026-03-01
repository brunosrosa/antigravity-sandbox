use std::fs;

fn main() {
    let filename = "test.txt";
    println!("Iniciando leitura do arquivo: {}", filename);

    match fs::read_to_string(filename) {
        Ok(contents) => {
            println!("Conteúdo do arquivo:\n{}", contents);
            println!("Sucesso! Leitura concluída sem erros.");
        },
        Err(e) => {
            eprintln!("Erro ao ler o arquivo {}: {}", filename, e);
            std::process::exit(1);
        }
    }
}
