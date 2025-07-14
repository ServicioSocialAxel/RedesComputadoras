import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from '../services/info.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit, OnDestroy {
  bibliografia: any[] = [];
  currentLang: string = 'es';
  langChangeSubscription: any;

  constructor(
    private infoService: InfoService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
    this.currentLang = this.translate.currentLang || this.translate.defaultLang;
    this.loadBibliografia();

    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      this.loadBibliografia();
    });
  }

  loadBibliografia(): void {
    if (this.currentLang === 'es') {
      this.bibliografia = this.infoService.getBibliografia();
    } else {
      this.bibliografia = this.infoService.getBibliografia(); // 
    }
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
