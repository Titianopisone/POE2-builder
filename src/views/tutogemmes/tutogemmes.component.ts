import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gemme,GemmesService } from '../../services/gemmes/gemmes.service';

@Component({
  selector: 'app-tutogemmes',
  imports: [],
  templateUrl: './tutogemmes.component.html',
  styleUrl: './tutogemmes.component.css'
})
export class TutogemmesComponent {
  protected gemmes!: Gemme
  constructor(private service: GemmesService, private route: ActivatedRoute) {
    route.paramMap.subscribe(param => {
      const id: number = +param.get("id")!
      if (id) {
        service.byId(id).subscribe({
          next: result => this.gemmes = result
        })
      }
    })
  }
}
