import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from '../../../services/categorias.service';
@Component({
  selector: 'app-excluir-categorias',
  templateUrl: './excluir-categorias.component.html',
  styleUrls: ['./excluir-categorias.component.css']
})
export class ExcluirCategoriasComponent {
  categoria:Categoria;
  
  constructor(private toastSerivce:ToastrService,private route: ActivatedRoute,private categoriaService:CategoriaService,private router:Router){
    this.categoria = new Categoria(0,'');
  }

  ngOnInit(): void {
    
    const id:number = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriaService.selecionarPorId(id)!.subscribe((c) => {
      this.categoria = c;
    });
  }

  excluirCategoria(){
    this.categoriaService.deletar(this.categoria).subscribe((c) => {
      this.toastSerivce.success('Categoria Excluida com Sucesso','Sucesso');

      this.router.navigate(['/categorias','listar']);
    });
  }
}
