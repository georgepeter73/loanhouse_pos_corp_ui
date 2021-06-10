export class Language {
  title?: string;
  value?: string;
  image?: string;

  constructor(language) {
    {
      this.title = language.title || 'English';
      this.value = language.value || 'en';
      this.image = language.image || './assets/images/small/flag-01.png';
    }
  }
}
