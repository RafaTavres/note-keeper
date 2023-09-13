import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Nota } from '../Nota';
import { NotaService } from '../notas.service';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent {
  nota:Nota;
  
  constructor(private toastSerivce:ToastrService,private route: ActivatedRoute,private notaService:NotaService,private router:Router){
    this.nota = new Nota('','','dark',0);
  }

  ngOnInit(): void {
    
    const id:number = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.nota = this.notaService.selecionarPorId(id)!;
  }

  excluirNota(){
    this.notaService.deletar(this.nota);

    this.toastSerivce.success('Nota Excluida com Sucesso','Sucesso');

    this.router.navigate(['/notas','listar']);
  }
}
