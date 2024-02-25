import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../../services/empleado.service";
import { NgForm } from '@angular/forms';
import { Empleado } from '../../models/empleado';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
 
declare var M: any;
@Component({
  standalone: true,
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.scss',
  providers: [EmpleadoService],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class EmpleadosComponent implements OnInit {
 
  constructor(public empleadoService: EmpleadoService) { }
  ngOnInit(): void {
  }
  agregarEmpleado(form?: NgForm) {
    this.empleadoService.postEmpleado(form?.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado satisfactoriamente'});
      });
  }
  resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
