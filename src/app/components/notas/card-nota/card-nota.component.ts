import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
    categoriaId:1
  };

  constructor(private notaService:NotaService,private router:Router) {}
 
}
