import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Nota } from 'src/app/models/Nota';
import { CategoriaService } from 'src/app/services/categorias.service';
import { NotaService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-arquivar-notas',
  templateUrl: './arquivar-notas.component.html',
  styleUrls: ['./arquivar-notas.component.css']
})
export class ArquivarNotasComponent implements OnInit{
  notas: Nota[] = [];
  categorias: Categoria[];

  constructor(private categoriaService:CategoriaService,private notaService:NotaService){
    this.categorias = [];
    this.categoriaService.selecionarTodos().subscribe((categorias) =>{
     this.categorias = categorias
    }); 
  }

  ngOnInit(): void {
    
    this.selecionarTodasNotasArquivadas();
  }

  filtrarNotasPorCategoria(categoria:Categoria | null){
    if(categoria == null){
      this.selecionarTodasNotasArquivadas();
      return;
    }

    this.selecionarNotasArquivadasPorCategoria(categoria);
  }

  selecionarTodasNotasArquivadas(){
    this.notaService.selecionarTodosArquivados().subscribe((notas) => {
      this.notas = notas
    });
  }

  selecionarNotasArquivadasPorCategoria(categoria: Categoria){
    this.notaService.selecionarNotasArquivadasPorCategoria(categoria).subscribe((notas) =>{
      this.notas = notas;
    })
  }
}

