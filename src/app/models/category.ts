export class Category {
  id?: string;
  name?: string;
  color?: string;
  taskNewCount?: number;
  status?: boolean;

  constructor(category) {
    {
      this.id = category.id || 1;
      this.name = category.name || '';
      this.color = category.color || '';
      this.taskNewCount = category.taskNewCount || 0;
      this.status = category.status || 0;
    }
  }
}
