import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibroComponent } from './components/libro/libro.component';
import { ContactoComponent  } from "./components/contacto/contacto.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";


const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"libros",
    component:LibroComponent
  },
  {
    path: "contacto",
    component:ContactoComponent
  },
  {
    path: "acerca-de",
    component:AcercaDeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

