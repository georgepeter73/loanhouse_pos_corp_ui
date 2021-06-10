import {Action} from '@ngrx/store';
import {Task} from '../../models/task';

export enum TaskActionTypes {
  addTask = '[TASK] ADD',
  updateTask = '[TASK] UPDATE',
  deleteTask = '[TASK] DELETE',
  closedTask = '[TASK] CLOSED'
}

export class AddTask implements Action {
  readonly type = TaskActionTypes.addTask;
  constructor(readonly payload: Task) {
  }
}

export class UpdateTask implements Action {
  readonly type = TaskActionTypes.updateTask;
  constructor(readonly payload: Task) {
  }
}

export class DeleteTask implements Action {
  readonly type = TaskActionTypes.deleteTask;
  constructor(readonly payload: Task) {
  }
}

export class ClosedTask implements Action {
  readonly type = TaskActionTypes.closedTask;
  constructor(readonly payload: string) {
  }
}

export type TaskActions = AddTask | UpdateTask | DeleteTask | ClosedTask;
