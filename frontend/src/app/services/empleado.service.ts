import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'http://localhost:3000/api/empleados'

  constructor(private http: HttpClient){
    this.selectedEmpleado = new Empleado();
    this.empleados        = [];
  }

  getEmpleados(){
    return this.http.get(this.URL_API);
  }

  postEmpleado(Empleados : Empleado){
    return this.http.post(this.URL_API, Empleados);
  }

  putEmpleado(Empleados : Empleado){
    return this.http.post(this.URL_API + `/${Empleados._id}`, Empleados);
  }

  deleteEmpleado(_id : String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
