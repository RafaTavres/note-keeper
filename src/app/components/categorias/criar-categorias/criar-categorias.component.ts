import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from '../../../services/categorias.service';

@Component({
  selector: 'app-criar-categorias',
  templateUrl: './criar-categorias.component.html',
  styleUrls: ['./criar-categorias.component.css']
})
export class CriarCategoriasComponent{
  categoria:Categoria;
    
  constructor(private categoriaService:CategoriaService,private toastSerivce:ToastrService,private router:Router){
     this.categoria = new Categoria(0,'');   
  }

  criarCategoria(){

      this.categoriaService.criar(this.categoria).subscribe((categoria) => {
          this.toastSerivce.success('categoria Criada com Sucesso','Sucesso');

          this.router.navigate(['/categorias','listar']);
      });
  }
}
