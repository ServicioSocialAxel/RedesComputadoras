import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.css']
})
export class GlosarioComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  optionsReady = false;  // Variable de control
  currentLang: string = 'es';  // Idioma actual, por defecto 'es' (español)

  constructor(
    private infoService: InfoService,
    private translate: TranslateService // Inyectar TranslateService
  ) {}

  ngOnInit(): void {
    // Establecer el idioma predeterminado a español si no está definido
    this.translate.setDefaultLang('es');
    this.currentLang = this.translate.currentLang || this.translate.defaultLang;
    console.log('Idioma inicial (ngOnInit):', this.currentLang);
    
    // Cargar las opciones de la tabla con datos en español por defecto
    this.setTableOptions();

    // Suscribirse a los cambios de idioma
    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang || this.translate.defaultLang;
      console.log('Idioma después del cambio (ngOnInit - onLangChange):', this.currentLang);
      // Actualizar las opciones de DataTables cuando cambie el idioma
      this.setTableOptions();
    });
  }

  // Método para configurar DataTables con traducciones dinámicas
  setTableOptions(): void {
    this.translate.get([
      'datatable.search', 
      'datatable.paginate.previous', 
      'datatable.paginate.next', 
      'datatable.info', 
      'datatable.lengthMenu'
    ]).subscribe(translations => {
      console.log('Traducciones obtenidas:', translations);  // Verifica las traducciones

      // Verificar el idioma actual y cargar datos según el idioma
      let data;
      if (this.currentLang === 'es') {
        data = this.infoService.getGlosario();  // Cargar los datos en español
        console.log('DATA: ', data);
      } else {
        data = this.infoService.getGlossary();  // Cargar los datos en inglés u otro idioma
        console.log('DATA: ', data);
      }

      // Configurar las opciones de DataTables
      this.dtOptions = {
        data: data,
        paging: true,
        info: false,
        responsive: true,
        lengthMenu: [[4, 8, 16, -1], [4, 8, 16, translations['datatable.lengthMenu']]],
        language: {
          search: translations['datatable.search'],
          paginate: {
            first: '',
            last: '',
            previous: translations['datatable.paginate.previous'],
            next: translations['datatable.paginate.next']
          },
          info: translations['datatable.info'],
          lengthMenu: translations['datatable.lengthMenu'],
        },
        columns: [
          { "data": "word" },
          { "data": "description" },
        ]
      };

      // Establecer que las opciones están listas para inicializar la tabla
      this.optionsReady = true;
    });
  }
}
