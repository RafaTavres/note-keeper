import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CardNotaComponent } from './components/notas/card-nota/card-nota.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriarCategoriasComponent } from './components/categorias/criar-categorias/criar-categorias.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { DropdownCategoriasComponent } from './components/notas/dropdown-categorias/dropdown-categorias.component';
import { EditarCategoriasComponent } from './components/categorias/editar-categorias/editar-categorias.component';
import { ExcluirCategoriasComponent } from './components/categorias/excluir-categorias/excluir-categorias.component';
import { FiltrosPorCategoriasComponent } from './components/notas/filtros-por-categorias/filtros-por-categorias.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent, ListarNotasComponent,CardNotaComponent,CriarNotaComponent, EditarNotaComponent, ExcluirNotaComponent, CriarCategoriasComponent, ListarCategoriasComponent, DropdownCategoriasComponent, EditarCategoriasComponent, ExcluirCategoriasComponent, FiltrosPorCategoriasComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,




    ToastrModule.forRoot({
       timeOut:5000,
       positionClass:'toast-bottom-right',
       preventDuplicates:true,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
