import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GemmesService {
  private http: HttpClient = inject(HttpClient);
  private readonly ENDPOINT: string = 'http://localhost:3000/gemmes';

  all() {
    return this.http.get<Gemme[]>(this.ENDPOINT);
  }

  byId(id: number) {
    return this.http.get<Gemme>(`${this.ENDPOINT}/${id}`);
  }
}

// Déclaration de l'interface Gemme à l'extérieur de la classe
export interface Gemme {
  id: number;
  name: string;
  description: string;
}
