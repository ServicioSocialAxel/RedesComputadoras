import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck{
  title = 'redesComp';
  unidades: any;
  currentLink: string = "";
  lastScrollPosition = 0;
  isSticky = false; // Empieza con el header visible
  navs : Array<any> = [
    {
      title : "Bienvenida",
      link: "#curso-info"
    },
    {
      title : "Metodología",
      link: "#meto"
    },
    {
      title : "Competencia",
      link: "#competencia"
    },
    {
      title : "Evaluación",
      link: "#eval"
    },
    {
      title : "Estrategias de Aprendizaje",
      link: "#estrategias"
    },
    {
      title : "Programa de Estudios",
      link: "#programa-estudios"
    },
    {
      title : "Contactos",
      link: "#contactos"
    },
    {
      title : "Requerimientos",
      link: "#reque"
    }

  ]
  constructor(private router: Router, private infoService: InfoService){
    this.unidades = this.infoService.getUnidades();
  }

  ngOnInit(): void {
    this.checkScroll();
  }

  ngDoCheck(): void {
    this.currentLink = this.router.url;
  }

  goToId(id:any){
    const element = document.querySelector(id);
    element.scrollIntoView();
    element.scrollIntoView();
  }

  collapse(){
     document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }

  @HostListener('document:scroll', ['$event'])
  checkScroll(event?: Event) {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    console.log('Scroll Position:', scrollPosition);
    console.log('isSticky:', this.isSticky);

    // Si el usuario ha hecho scroll hacia abajo o está en la parte superior de la página, el encabezado debe estar visible
    this.isSticky = scrollPosition < 0 || scrollPosition > this.lastScrollPosition;

    this.lastScrollPosition = scrollPosition;
  }

}


