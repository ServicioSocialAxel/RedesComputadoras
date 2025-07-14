import { Injectable } from '@angular/core';
import unidades from './json/unidades.json'
import units from './json/en/units.json'
import autoevaluaciones from './json/autoevaluaciones.json';
import glosario from './json/glosario.json';
import glossary from './json/glossary.json'
import { saveAs } from "file-saver"
import { HttpClient } from '@angular/common/http';
import bibliografia from './json/bibliografia.json';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getUnidades(){
    return unidades;
  }

  getUnits(){
    return units;
  }

  getTitleUnits() {
    return [
      { indice: '1', titulo: 'unit.1' },
      { indice: '2', titulo: 'unit.2' },
      { indice: '3', titulo: 'unit.3' },
      { indice: '4', titulo: 'unit.4' },
      { indice: '5', titulo: 'unit.5' }
    ];
  }

  getAutoevaluaciones(){
    return autoevaluaciones;
  }

  getGlosario(){
    return glosario;
  }

  getGlossary(){
    return glossary;
  }

  writeJSON(data: any){
    const blob = new Blob([JSON.stringify(data)], {type : 'application/json'});
    //saveAs(blob, './json/test.json');
    this.http.post('./json/test.json', JSON.stringify(data));
  }

  getBibliografia(){
    return bibliografia;
  }
  

}
