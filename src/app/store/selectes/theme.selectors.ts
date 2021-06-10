import {AppState} from '../states';

// Theme Settings
export const getLanguages = (state: AppState) => state.theme.languages;
export const getColors = (state: AppState) => state.theme.colors;
export const language = (state: AppState) => state.theme.languages.find((lang) => lang.value === state.theme.language);
export const color = (state: AppState) => state.theme.color;
export const isRTL = (state: AppState) => state.theme.isRTL;
export const isDark = (state: AppState) => state.theme.isDark;


// Authentication User

// Users
export const getUsers = (state: AppState) => state.theme.users;
