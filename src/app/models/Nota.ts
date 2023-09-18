
export class Nota{
    id?: number;
    titulo: string;
    conteudo: string;
    tema:Tema;
    categoriaId:number;
    arquivada:boolean;


    constructor(titulo:string, conteudo:string, tema:Tema, id:number, categoriaId:number,arquivada:boolean) {
        this.id = id;
        this.titulo= titulo;
        this.conteudo= conteudo;
        this.tema= tema;
        this.categoriaId = categoriaId;
        this.arquivada = arquivada;
    }
}

type Tema = 'info' | 'warning' | 'danger' | 'dark'; 