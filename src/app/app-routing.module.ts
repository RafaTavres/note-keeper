import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCategoriasComponent } from './components/categorias/criar-categorias/criar-categorias.component';
import { EditarCategoriasComponent } from './components/categorias/editar-categorias/editar-categorias.component';
import { ExcluirCategoriasComponent } from './components/categorias/excluir-categorias/excluir-categorias.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notas/listar',
    pathMatch: 'full',
  },
  {
    path: 'notas/listar',
    component: ListarNotasComponent,
  },
  {
    path: 'notas/criar',
    component: CriarNotaComponent,
  },
  {
    path: 'notas/editar/:id',
    component: EditarNotaComponent,
  },
  {
    path: 'notas/excluir/:id',
    component: ExcluirNotaComponent,
  },





  {
    path: 'categorias/listar',
    component: ListarCategoriasComponent,
  },
  {
    path: 'categorias/criar',
    component: CriarCategoriasComponent,
  },
  {
    path: 'categorias/editar/:id',
    component: EditarCategoriasComponent,
  },
  {
    path: 'categorias/excluir/:id',
    component: ExcluirCategoriasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
