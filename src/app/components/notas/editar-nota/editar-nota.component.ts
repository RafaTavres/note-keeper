import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Nota } from 'src/app/models/Nota';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from '../../../services/categorias.service';
import { NotaService } from '../../../services/notas.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit{
  nota:Nota;
  categorias:Categoria[];

  constructor(private categoriaService:CategoriaService,private toastService:ToastrService,private route: ActivatedRoute,private notaService:NotaService,private router:Router){
    this.nota = new Nota('','','dark',0,1,false);
    this.categorias = [];
  }

  ngOnInit(): void {
    
    const id:number = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.notaService.selecionarPorId(id)!.subscribe((n) => {
      console.log(n);
      this.nota = n;
    });

    this.categoriaService.selecionarTodos().subscribe((categorias) =>{
      this.categorias = categorias
      console.log(categorias);
    }); 
  }



  editarNota(){
    this.notaService.editar(this.nota).subscribe((n) => {
      this.toastService.success('Nota Editada com Sucesso','Sucesso');

      this.router.navigate(['/notas','listar']);
    });
  }
}
