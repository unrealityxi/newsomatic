import { Injectable } from '@angular/core';
import { languages } from 'src/app/models/enums/languages.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LanguageService {
  private _language: languages = languages.us;
  public language$: BehaviorSubject<languages> = new BehaviorSubject(
    this._language
  );

  shouldEnableLanguageSelection$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  get language(): languages {
    return this._language;
  }

  set language(lang: languages) {
    this._language = lang;
    this.language$.next(lang);
  }

  constructor() {}

  disableLanguageSelection(){
    this.shouldEnableLanguageSelection$.next(false);
  }
  enableLanguageSelection(){
    this.shouldEnableLanguageSelection$.next(true);
  }
}
