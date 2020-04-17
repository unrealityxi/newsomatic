import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { languages } from 'src/app/models/enums/languages.enum';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  public languages = Object.values(languages);
  public selectedLanguage: languages;
  public shouldEnableLanguageChange = true;
  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.listenToLanguageChanges();
    this.listenToLanguageDisabling();
  }

  setLanguage(lang: languages) {
    this.languageService.language = lang;
  }

  listenToLanguageChanges() {
    this.languageService.language$
      .pipe(untilDestroyed(this))
      .subscribe((lang) => {
        this.selectedLanguage = lang;
      });
  }

  listenToLanguageDisabling() {
    this.languageService.shouldEnableLanguageSelection$.pipe(untilDestroyed(this)).subscribe((isEnabled) => {
      this.shouldEnableLanguageChange = isEnabled;
    });
  }

  ngOnDestroy() {}
}
