import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Nota } from "../Nota";
import { NotaService } from "../notas.service";

@Component({
    selector:'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls:['./criar-nota.component.css']
})
export class CriarNotaComponent{
    nota:Nota;

    constructor(private toastSerivce:ToastrService,private notaService:NotaService,private router:Router) {
       this.nota = new Nota('','','dark',0);     
    }

    criarNota(){

        this.notaService.criar(this.nota).subscribe((nota) => {
            this.toastSerivce.success('Nota Criada com Sucesso','Sucesso');

            this.router.navigate(['/notas','listar']);
        });
    }

}