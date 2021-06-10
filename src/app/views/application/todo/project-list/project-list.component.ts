import {Component, OnInit, TemplateRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { Project } from '../../../../models/project';
import {AddProject, SelectedCategory, SelectedProject} from '../../../../store/actions/project.actions';
import {SnackbarService} from 'ngx-snackbar';
import * as TodoState from '../../../../store/selectes/todo.selectors';
import {Category} from '../../../../models/category';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit {
  modalRef: BsModalRef;
  project: Project = new Project({});
  projects: Project[];
  categories: Category[];
  selectedProject: number;
  selectedCategory: number;
  searchProject = {
    name: ''
  };

  constructor(private store: Store<any>, private modalService: BsModalService, private snackbarService: SnackbarService) {
    store.select(TodoState.getProjects).subscribe((projects) => this.projects = projects);
    store.select(TodoState.getCategories).subscribe((categories) => this.categories = categories);
    store.select(TodoState.selectedProjectIndex).subscribe((selectedProject) => this.selectedProject = selectedProject);
    store.select(TodoState.selectedCategoryIndex).subscribe((selectedCategory) => this.selectedCategory = selectedCategory);
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveProject(project) {
    this.store.dispatch(new AddProject(new Project(project.form.value)));
    this.modalRef.hide();

    this.snackbarService.add({msg: 'You have added project successfully.',
      timeout: 5000,
      action: {text: 'close', color: '#ffffff'}});
    this.project = new Project({});
  }

  clickProject(project) {
    this.store.dispatch(new SelectedProject(project.id));
  }

  clickCategory(category) {
    this.store.dispatch(new SelectedCategory(category.id));
  }

}
