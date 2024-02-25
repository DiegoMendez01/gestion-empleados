import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleados;
  empleados: Empleados[];
  readonly URL_API = 'http://localhost:3000/api/empleados'

  constructor(private http: HttpClient){
    this.selectedEmpleado = new Empleados();
    this.empleados        = [];
  }

  getEmpleados(){
    return this.http.get(this.URL_API);
  }

  postEmpleado(Empleados : Empleados){
    return this.http.post(this.URL_API, Empleados);
  }

  putEmpleado(Empleados : Empleados){
    return this.http.post(this.URL_API + `/${Empleados._id}`, Empleados);
  }

  deleteEmpleado(_id : String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
