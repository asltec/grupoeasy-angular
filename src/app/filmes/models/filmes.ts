export interface Filmes {
    id_filme: string;
    tipo_produto: string;
    tipo_filme: string;
    genero: string;
    titulo: string;
    atores: string;
    diretores: string;
    fornecedor: string;
    idioma?: string;
    valor_locacao: string;
    data_cadastro: string;
}

export const filmes: Filmes[] = [
   {
        id_filme: '0000035', 
        tipo_produto: 'VHS', 
        tipo_filme: '24 HORAS', 
        genero: 'AÇÃO', 
        titulo: '+ VELOZES + FURIOSOS',
        atores: 'PAUL WALKER, VIN DIESEL',
        diretores: 'JOHN SINGLETON',
        fornecedor: 'NOVA ERA VIDEO',
        valor_locacao: '2.50',
        data_cadastro: '2021-11-09'
    },
    {
        id_filme: '0000082', 
        tipo_produto: 'VHS', 
        tipo_filme: '24 HORAS', 
        genero: 'AÇÃO', 
        titulo: '007 UM NODO DIA PARA MORRER',
        atores: 'Pierce Brosnan, Halie Berry',
        diretores: 'Lee Tamahori',
        fornecedor: 'NOVA ERA VIDEO',
        valor_locacao: '2.50',
        data_cadastro: '2021-11-09'
    },
    {
        id_filme: '00000122', 
        tipo_produto: 'VHS', 
        tipo_filme: '24 HORAS', 
        genero: 'AÇÃO', 
        titulo: '60 SEGUNDOS',
        atores: 'Nicolas Cage, Angelina Jolie',
        diretores: 'Dominic Sena',
        fornecedor: 'NOVA ERA VIDEO',
        valor_locacao: '2.50',
        data_cadastro: '2021-11-09'
    }

]