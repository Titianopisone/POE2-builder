import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavebarComponent } from "../components/navebar/navebar.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exilée';
}
