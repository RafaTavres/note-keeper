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
       this.nota = new Nota('','','dark',0,10,false);   
       this.categorias = [];
          
    }

    ngOnInit(): void {
        this.categoriaService.selecionarTodos().subscribe((categorias) =>{
            this.categorias = categorias
            console.log(categorias);
        }); 
    }
    

    criarNota(){
        console.log(this.nota)
        this.notaService.criar(this.nota).subscribe((nota) => {
            this.toastSerivce.success('Nota Criada com Sucesso','Sucesso');

            this.router.navigate(['/notas','listar']);
        });
    }
}