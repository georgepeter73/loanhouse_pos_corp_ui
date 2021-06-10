export class Color {
  primary?: string;
  primaryLight?: string;
  bodyBgLight?: string;
  bodyBgDark?: string;

  constructor(category) {
    {
      this.primary = category.primary || 'rgba(255,136,172,1)';
      this.primaryLight = category.primaryLight || 'rgba(255,161,164,1)';
      this.bodyBgLight = category.bodyBgLight || '#fcf6f8';
      this.bodyBgDark = category.bodyBgDark || '#1d203f';
    }
  }
}
