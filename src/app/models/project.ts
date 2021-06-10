import { UUID } from 'angular2-uuid';

export class Project {
  id?: string;
  name?: string;
  status?: boolean;

  constructor(project) {
    {
      this.id = project.id || UUID.UUID();
      this.name = project.name || '';
      this.status = project.status || true;
    }
  }
}
