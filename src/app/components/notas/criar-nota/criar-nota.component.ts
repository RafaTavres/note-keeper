import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Categoria } from "src/app/models/Categoria";
import { Nota } from "src/app/models/Nota";

import { CategoriaService } from "../../../services/categorias.service";

import { NotaService } from "../../../services/notas.service";

@Component({
    selector:'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls:['./criar-nota.component.css']
})
export class CriarNotaComponent implements OnInit{
    nota:Nota;
    categorias:Categoria[];
      
    constructor(private categoriaService:CategoriaService,private toastSerivce:ToastrService,private notaService:NotaService,private router:Router){
       this.nota = new Nota('','','dark',0,10);   
       this.categorias = [];
       this.categoriaService.selecionarTodos().subscribe((categorias) =>{
        this.categorias = categorias
       });    
    }
    ngOnInit(): void {
        this.categoriaPadrao();
    }
    

    selecionarCategoria(event:Event){
        let row = event.target as HTMLSelectElement;
        let index:number = row.selectedIndex + 1;
        this.categoriaService.selecionarPorId(index)?.subscribe((categoria)=>{
            this.nota.categoriaId = categoria.id!;
        });
    }
    categoriaPadrao(){
        this.nota.categoriaId = 1;
    }

    criarNota(){
        console.log(this.nota)
        this.notaService.criar(this.nota).subscribe((nota) => {
            this.toastSerivce.success('Nota Criada com Sucesso','Sucesso');

            this.router.navigate(['/notas','listar']);
        });
    }
}