import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Classe, ClassesService } from '../../services/classes/classes.service';

@Component({
  selector: 'app-navebar',
  imports: [RouterLink],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.css'
})
export class NavebarComponent {
 classes: Classe[] = []
  constructor(service: ClassesService) {
    service.all().subscribe(result => { this.classes = result })
  }
  http=inject(HttpClient)
}
