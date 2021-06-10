import {Action} from '@ngrx/store';

export enum ThemeActionTypes {
  setThemeMode = '[Theme] SET MODE',
  setThemeColor = '[Theme] SET COLOR',
  setThemeRTL = '[Theme] SET RTL',
  setThemeLanguage = '[Theme] SET LANGUAGE'
}

export class SetThemeMode implements Action {
  readonly type = ThemeActionTypes.setThemeMode;

  constructor(readonly payload: boolean) {
  }
}

export class SetThemeColor implements Action {
  readonly type = ThemeActionTypes.setThemeColor;

  constructor(readonly payload: string) {
  }
}

export class SetThemeRTL implements Action {
  readonly type = ThemeActionTypes.setThemeRTL;

  constructor(readonly payload: boolean) {
  }
}

export class SetThemeLanguage implements Action {
  readonly type = ThemeActionTypes.setThemeLanguage;

  constructor(readonly payload: string) {
  }
}

export type ThemeActions =  SetThemeMode | SetThemeColor | SetThemeRTL | SetThemeLanguage;
