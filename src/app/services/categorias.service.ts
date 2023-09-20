import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Categoria } from "../models/Categoria";

@Injectable({
    providedIn:'root'
})
export class CategoriaService{

  private API_URL = `${environment.API_URL}/api/categorias`;
 
  constructor(private http: HttpClient) {}

      criar(nota:Categoria){
        return this.http.post<Categoria>(this.API_URL,nota);
      }

      editar(nota:Categoria){
        return this.http.put<Categoria>(this.API_URL+`/${nota.id}`,nota);
      }

      deletar(nota:Categoria){
        return this.http.delete<Categoria>(this.API_URL+`/${nota.id}`);
      }

      selecionarPorId(id:number):Observable<Categoria> | undefined{
        return this.http.get<Categoria>(this.API_URL+`/${id}`);
      }

      selecionarTodos():Observable<Categoria[]>{
        return this.http.get<Categoria[]>(this.API_URL);
      }
}