import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Classe, ClassesService } from '../../services/classes/classes.service';
import { Gemme, GemmesService } from '../../services/gemmes/gemmes.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  classes: Classe[] = [];
  gemmes: Gemme[] = [];

  constructor(private classesService: ClassesService, private gemmesService: GemmesService) {

    this.classesService.all().subscribe(result => {
      this.classes = result;
    });

    this.gemmesService.all().subscribe(result => {
      this.gemmes = result;
    });
  }

  http = inject(HttpClient);
}
