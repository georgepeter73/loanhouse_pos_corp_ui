import {Action} from '@ngrx/store';
import { Project } from '../../models/project';

export enum ProjectActionTypes {
  selectedCategory = '[PROJECT] SELECTED CATEGORY',
  selectedProject = '[PROJECT] SELECTED PROJECT',
  addProject = '[PROJECT] ADD',
  updateProject = '[PROJECT] UPDATE',
  deleteProject = '[PROJECT] DELETE'
}

export class SelectedCategory implements Action {
  readonly type = ProjectActionTypes.selectedCategory;
  constructor(readonly payload: string) {
  }
}

export class SelectedProject implements Action {
  readonly type = ProjectActionTypes.selectedProject;
  constructor(readonly payload: string) {
  }
}

export class AddProject implements Action {
  readonly type = ProjectActionTypes.addProject;
  constructor(readonly payload: Project) {
  }
}

export class UpdateProject implements Action {
  readonly type = ProjectActionTypes.updateProject;
  constructor(readonly payload: Project) {
  }
}

export class DeleteProject implements Action {
  readonly type = ProjectActionTypes.deleteProject;
  constructor(readonly payload: Project) {
  }
}

export type ProjectActions = SelectedCategory | SelectedProject | AddProject | UpdateProject | DeleteProject;
