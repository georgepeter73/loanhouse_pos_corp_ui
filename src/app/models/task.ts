import { UUID } from 'angular2-uuid';

export class Task {
  id: string;
  title: string;
  projectId: string;
  categoryId: string;
  userId: string;
  priority: string;
  status: boolean;


  constructor(task) {
    {
      this.id = task.id || UUID.UUID();
      this.title = task.title || '';
      this.projectId = task.projectId || null;
      this.categoryId = task.categoryId || '2';
      this.userId = task.userId || '1';
      this.priority = task.priority || 'Expiring';
      this.status = task.status || true;
    }
  }
}
