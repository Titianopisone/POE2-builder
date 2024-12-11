import { Component } from '@angular/core';
import { Classe, ClassesService } from '../../services/classes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poeclasses',
  imports: [],
  templateUrl: './poeclasses.component.html',
  styleUrl: './poeclasses.component.css'
})
export class PoeclassesComponent {
  protected classe!: Classe
  constructor(private service: ClassesService, private route: ActivatedRoute) {
    route.paramMap.subscribe(param => {
      const id: number = +param.get("id")!
      if (id) {
        service.byId(id).subscribe({
          next: result => this.classe = result
        })
      }
    })
  }
}
