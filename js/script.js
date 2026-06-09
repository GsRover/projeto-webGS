function mudarTema(tema) {
    // Limpa os temas adicionais
    document.body.classList.remove('tema-marte', 'tema-claro');
    
    // Se não for o padrão, adiciona a classe correspondente
    if (tema !== 'padrao') {
        document.body.classList.add(`tema-${tema}`);
    }
}