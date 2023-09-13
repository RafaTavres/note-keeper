import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ObservedValuesFromArray } from "rxjs";
import { Nota } from "./Nota";

@Injectable({
    providedIn:'root'
})
export class NotaService{

  private API_URL = 'http://localhost:3000/notas';
 
  constructor(private http: HttpClient) {}

      criar(nota:Nota){
        return this.http.post<Nota>(this.API_URL,nota);
      }

      editar(nota:Nota){
        return this.http.put<Nota>(this.API_URL+`/${nota.id}`,nota);
      }


      deletar(nota:Nota){
        return this.http.delete<Nota>(this.API_URL+`/${nota.id}`);
      }

      selecionarPorId(id:number):Observable<Nota> | undefined{
        return this.http.get<Nota>(this.API_URL+`/${id}`);
      }

      selecionarTodos():Observable<Nota[]>{
        return this.http.get<Nota[]>(this.API_URL);
      }
}