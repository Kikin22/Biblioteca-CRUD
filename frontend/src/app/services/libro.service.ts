import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Libro } from "../models/libro";

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  URL_API = "http://localhost:3000/api/libros"
  
  selectedLibro: Libro ={
    name:"",
    editor:"",
    author:"",
    year:0
    
  };
  libros : Libro[];
  
  constructor(private http: HttpClient) { }

  getLibros(){
    return this.http.get<Libro[]>(this.URL_API);
  }

  createLibro(libro: Libro){
    return this.http.post(this.URL_API, libro);

  }

  updateLibro(libro : Libro){
    return this.http.put(`${this.URL_API}/${libro._id}`, libro);

  }

  deleteLibro(_id: string){
    //http://localhost:3000/api/libros
    return this.http.delete(`${this.URL_API}/${_id}`)

  }


}
