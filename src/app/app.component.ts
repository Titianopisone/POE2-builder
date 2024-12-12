import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavebarComponent } from "../components/navebar/navebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exilée';
}
