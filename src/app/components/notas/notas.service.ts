import { Injectable } from "@angular/core";
import { Nota } from "./Nota";

@Injectable({
    providedIn:'root'
})
export class NotaService{
  

    notas: Nota[] = [
        {
          id: 0,
          titulo: 'Lavar o cachorro 🦮',
          conteudo: 'Pegar a toalha > Pegar o Shampoo',
          tema:'dark'
        },
        {
          id: 1,
          titulo: 'Prepara Aula',
          conteudo: 'Prerparar Jamboard',
          tema:'warning'
        },
        {
          id: 2,
          titulo: 'AaAAAADAAAAAAAAAAAAAAAa',
          conteudo: 'Testando os cards',
          tema:'danger'
        },
      ];

      criar(nota:Nota){
        nota.id = this.notas.length;
        this.notas.push(nota);
      }

      editar(nota:Nota){
        const idEdicao = this.notas.findIndex((n) => n.id == nota.id);

        this.notas[idEdicao] = nota;
      }


      deletar(nota:Nota){
        const idDeletar = this.notas.findIndex((n) => n.id == nota.id);

        this.notas.splice(idDeletar,1)
      }

      selecionarPorId(id:number):Nota | undefined{
        return this.notas.find((nota) => nota.id == id);
      }

      selecionarTodos():Nota[]{
        return this.notas;
      }
}