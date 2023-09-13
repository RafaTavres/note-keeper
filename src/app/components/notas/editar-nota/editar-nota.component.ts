import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Nota } from '../Nota';
import { NotaService } from '../notas.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent  implements OnInit{
  nota:Nota;

  constructor(private toastSerivce:ToastrService,private route: ActivatedRoute,private notaService:NotaService,private router:Router){
    this.nota = new Nota('','','dark',0);
  }

  ngOnInit(): void {
    
    const id:number = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.nota = this.notaService.selecionarPorId(id)!;
  }

  editarNota(){
    this.notaService.editar(this.nota);

    this.toastSerivce.success('Nota Editda com Sucesso','Sucesso');

    this.router.navigate(['/notas','listar']);
  }
}
