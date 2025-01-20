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
 classes: Classe[] = [];
isclassemenuVisible: boolean= false;
isgemmemenuVisible: boolean= false;
isequipementmenuVisible: boolean= false;
isbuildmenuVisible: boolean= false;
  constructor(private classesService: ClassesService) {
    this.classesService.all().subscribe(result => {
      this.classes = result;
    });
  }
  toggleSubmenu(submenuname:string): void {
   this.isbuildmenuVisible=false;
   this.isclassemenuVisible=false;
   this.isgemmemenuVisible=false;
   this.isequipementmenuVisible=false;
switch(submenuname){
  case "classe":
    this.isclassemenuVisible = !this.isclassemenuVisible;
    break;
  case "gemme":
    this.isgemmemenuVisible = !this.isgemmemenuVisible;
    break;
  case "equipement":
    this.isequipementmenuVisible = !this.isequipementmenuVisible;
    break;
  case "build":
    this.isbuildmenuVisible = !this.isbuildmenuVisible;
    break;
    
}  
  }
  
  http=inject(HttpClient)
}

