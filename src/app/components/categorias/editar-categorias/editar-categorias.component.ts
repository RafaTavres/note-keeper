import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from '../../../services/categorias.service';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit{
  categoria:Categoria;

  constructor(private categoriaService:CategoriaService,private toasterService:ToastrService,private route: ActivatedRoute,private router:Router){
    this.categoria = new Categoria(0,'');
  }

  ngOnInit(): void {
    
    const id:number = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriaService.selecionarPorId(id)!.subscribe((c) => {
      console.log(c);
      this.categoria = c;
    });
  }


  editarCategoria(){
    this.categoriaService.editar(this.categoria).subscribe((c) => {
      this.toasterService.success('Categoria Editada com Sucesso','Sucesso');

      this.router.navigate(['/categorias','listar']);
    });
  }
}

