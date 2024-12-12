import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

private http: HttpClient=inject(HttpClient)
private readonly ENDPOINT:string="http://localhost:3000/classes"

all(){
  return this.http.get<Classe[]>(this.ENDPOINT)
}

byId(id:number){
  return this.http.get<Classe>(`${this.ENDPOINT}/${id}`)
}


}
export interface Classe{
  id:number,
  name:string,
  description:string,
  stats:string,
  typeDeDegats:string,
  typeDeDefense:string,
  imagedeClasse:string
}