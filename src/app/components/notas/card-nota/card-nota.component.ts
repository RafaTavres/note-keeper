import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Nota } from 'src/app/models/Nota';
import { NotaService } from '../../../services/notas.service';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class CardNotaComponent {
  @Input() nota: Nota = {
    id: 0,
    titulo: '',
    conteudo: '',
    tema: 'dark',
    arquivada:false,
    categoriaId:1
  };

  ArquivarNota(nota:Nota){
    nota.arquivada = true;
    this.notaService.editar(nota).subscribe((n) => {
      this.toastService.success('Nota Arquivada com Sucesso','Sucesso'
      ,);

      this.router.navigate(['/notas','arquivados']);
    });
  }

  DesarquivarNota(nota:Nota){
    nota.arquivada = false;
    this.notaService.editar(nota).subscribe((n) => {
      this.toastService.success('Nota Desarquivada com Sucesso','Sucesso',);

      this.router.navigate(['/notas','listar']);
    });
  }

  constructor(private notaService:NotaService,private toastService:ToastrService,private router:Router) {}
 
}
