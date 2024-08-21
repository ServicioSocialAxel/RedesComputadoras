import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsables = [
    {
      name : "Benjamín Cruz Torres",
      photo: "assets/img/prof1.jpeg",
      mail: "bcruzt@ipn.mx",
      info: "Doctor en Ciencias de la Computación <br/>Docente en ESCOM",
      intereses: "Inteligencia Artificial<br/> Reconocimiento de Patrones<br/> Computación distribuida"
    },
    {
      name : "Verónica Agustín Domínguez",
      photo: "assets/img/prof2.jpg",
      mail: "vagustin@ipn.mx",
      info: "M. en C. <br/>Mtra. ESCA Sto. Tomas IPN<br/>ESCOM-IPN Depto. de ISC profesora titular desde 2009",
      intereses: "Gestión Empresarial<br/> Desarrollo de Proyectos<br/> Educación continua<br/> Emprendimiento"
    },
    {
      name : "Axel Ernesto Moreno Cervantes",
      photo: "assets/img/prof3.jpg",
      mail: "amorenoc@ipn.mx",
      info: "Doctor en Educación (CUGS) en 2020.<br/> M. en C. (CINVESTAV) en 2004 <br/> Ingeniero en Sistemas Computacionales (ESCOM-IPN) en 2000. <br/> Profesor del Depto ISC (ESCOM-IPN) desde 2004",
      intereses: "Sistemas distribuidos<br/> Educación"
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  goToId(id:any){
    const element = document.querySelector(id);
    element.scrollIntoView();
  }
}
