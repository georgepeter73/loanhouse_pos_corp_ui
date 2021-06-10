import {initialThemeState, ThemeState} from '../states/theme.state';
import {ThemeActions, ThemeActionTypes} from '../actions/theme.actions';

export function ThemeReducer(state: ThemeState = initialThemeState, action: ThemeActions)
  : ThemeState {
  switch (action.type) {
    case ThemeActionTypes.setThemeLanguage:
      return {
        ...state,
        language: action.payload
      };
    case ThemeActionTypes.setThemeColor:
      return {
        ...state,
        color: action.payload
      };
    case ThemeActionTypes.setThemeMode:
      return {
        ...state,
        isDark: action.payload
      };
    case ThemeActionTypes.setThemeRTL:
      return {
        ...state,
        isRTL: action.payload
      };
    default:
      return state;
  }
}
