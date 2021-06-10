import {Component, DoCheck, TemplateRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {Project} from '../../../../models/project';
import {Category} from '../../../../models/category';
import {Task} from '../../../../models/task';
import {User} from '../../../../models/user';
import * as TodoState from '../../../../store/selectes/todo.selectors';
import * as ThemeState from '../../../../store/selectes/theme.selectors';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SnackbarService} from 'ngx-snackbar';
import {AddTask, ClosedTask} from '../../../../store/actions/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: []
})
export class TaskListComponent implements DoCheck {
  modalRef: BsModalRef;
  project: Project;
  category: Category;
  tasks: Task[];
  users: User[];
  selectedTask: Task = new Task({});
  searchTask = {
    title: ''
  };
  taskUsers = [
    {
      value: '1',
      label: 'Andy Mabbett'
    },
    {
      value: '2',
      label: 'Nik John'
    },
    {
      value: '3',
      label: 'Ag Bro'
    }
  ];
  categories = [
    {
      value: '2',
      label: 'People'
    },
    {
      value: '3',
      label: 'Files'
    },
    {
      value: '4',
      label: 'Statistics'
    }
  ];
  priorities = [
    'Expiring', 'Ending', 'Urgent'
  ];

  constructor(private store: Store<any>, private modalService: BsModalService, private snackbarService: SnackbarService) {
    store.select(TodoState.selectedCategory).subscribe((category) => this.category = category);
    store.select(TodoState.selectedProject).subscribe((project) => this.project = project);
    store.select(TodoState.getTasks).subscribe((tasks) => this.tasks = tasks);
    store.select(ThemeState.getUsers).subscribe((users) => this.users = users);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngDoCheck() {
    this.selectedTask.projectId = this.project.id;
  }

  getUser(userId, type) {
    const getUser = this.users.findIndex((user) => user.id === userId);

    if (getUser == null) {
      return this.users[0][type];
    } else {
      return this.users[getUser][type];
    }
  }

  saveTask(form) {
    this.store.dispatch(new AddTask(new Task(this.selectedTask)));
    this.modalRef.hide();

    this.snackbarService.add({msg: 'You have added task successfully.',
      timeout: 1000,
      action: {text: 'close', color: '#ffffff'}});

    this.selectedTask = new Task({projectId: this.project.id});
  }

  clickTask(task) {
    this.store.dispatch(new ClosedTask(task.id));

    this.snackbarService.add({msg: 'You have updated task status successfully.',
      timeout: 1000,
      action: {text: 'close', color: '#ffffff'}});

  }
}
