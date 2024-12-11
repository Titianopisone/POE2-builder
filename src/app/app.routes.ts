import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent:()=>import("./views/home/home.component").then(m=>m.HomeComponent)
    },
    {
        path:"classes/:id",
        loadComponent:()=>import("./views/poeclasses/poeclasses.component").then(m=>m.PoeclassesComponent)
    },

];
