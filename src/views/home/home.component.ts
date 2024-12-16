import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Classe, ClassesService } from '../../services/classes/classes.service';
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  classes: Classe[] = []
  constructor(service: ClassesService) {
    service.all().subscribe(result => { this.classes = result })
  }
  http=inject(HttpClient)
}
