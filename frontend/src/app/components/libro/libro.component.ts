import { Component, OnInit } from '@angular/core';
import { LibroService } from "../../services/libro.service";
import { NgForm } from "@angular/forms";
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  nombre ='';
  busquedaLibros = [];
  constructor(public libroService: LibroService) { }

  ngOnInit(): void {
    this.getLibros();
    this.libroService.getLibros().subscribe(
      res => {
        console.log(res);
        this.libroService.libros = res;
      });
  }

  resetForm(form: NgForm) {
    form.reset();

  }

  getLibros() {
    this.libroService.getLibros().subscribe(
      res => {
        this.libroService.libros = res;
      },
      err => console.log(err)

    )
  }

  addLibro(form: NgForm) {
    if (form.value._id) {
      //console.log("actualizando")
      this.libroService.updateLibro(form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    } else {
      this.libroService.createLibro(form.value).subscribe(
        res => {
          this.getLibros();
          form.reset();
        },
        err => console.log(err)
      )
      //console.log(form.value);
    }
  }

  deleteLibro(id: string) {
    const res = confirm('Seguro que quieres eliminarlo?');
    //console.log(res);
    if (res) {
      this.libroService.deleteLibro(id)
        .subscribe(
          res => {
            this.getLibros();
          },
          err => console.log(err)
        );
    }
  }

  editLibro(libro: Libro) {
    this.libroService.selectedLibro = libro;
  }

  buscarLibro(){
    //console.log(this.libroService.libros);
   this.libroService.libros.forEach(libro => {
     if (libro.name === this.nombre) {
      //console.log(libro);
      this.busquedaLibros.push(libro);
     }
   });
   this.libroService.libros = this.busquedaLibros;
  }

}
