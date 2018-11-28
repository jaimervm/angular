import { Component } from "@angular/core";
import { Alumno } from "./models/alumno";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  alumnoArray: Alumno[] = [
    { id: 1, nombre_completo: "Marcelo Moscoso", identidad: "4545458" },
    { id: 2, nombre_completo: "Ana Gomez", identidad: "7878789" },
    { id: 3, nombre_completo: "Jorge Valquez", identidad: "2323238" }
  ];

  selectedAlumno: Alumno = { id: 0, nombre_completo: "", identidad: "" };
  openForEdit(Alumno: Alumno): void {
    this.selectedAlumno = Alumno;
  }
  addOrEdit(): void {
    if (this.selectedAlumno.id === 0) {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = { id: 0, nombre_completo: "", identidad: "" };
  }
  delete(): void {
    if (confirm("Are you sure you want to delete it?")) {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = { id: 0, nombre_completo: "", identidad: "" };
    }
  }
}
