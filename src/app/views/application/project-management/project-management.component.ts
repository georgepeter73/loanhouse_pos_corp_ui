import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SnackbarService} from 'ngx-snackbar';
import {Board} from '../../../models/board';
import {BoardTask} from '../../../models/board-task';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styles: []
})
export class ProjectManagementComponent implements OnInit {

  modalRef: BsModalRef;
  selectedBoard = new Board({});
  selectedTask: BoardTask = new BoardTask({});
  boards: Board[] = [
    {
      id: '1',
      title: 'Todo',
      color: 'bg-primary'
    },
    {
      id: '2',
      title: 'Planing',
      color: 'bg-success'
    },
    {
      id: '3',
        title: 'Working',
      color: 'bg-info'
    },
    {
      id: '4',
      title: 'Testing',
      color: 'bg-warning'
    },
    {
      id: '5',
      title: 'Complete',
      color: 'bg-danger'
    }
  ];
  priorities = [
    'Low', 'High', 'Critical'
  ];

  tasks: BoardTask[] = [
    { id: '1', name: 'Product Design', boardId: '1', userId: '1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industry\'s', status: 0, date: '2020-01-1' },
    { id: '2', name: 'Product Requirement', boardId: '1', userId: '2',
      description: 'Get requirement form client and skype call with client', status: 2, date: '2020-01-3' },
    { id: '3', name: 'Flow Diagram', boardId: '2', userId: '1',
      description: 'Lorem Ipsum is simply dummy text ' +
        'of the printing and typesetting industry.',
      status: 1, date: '2020-01-5' },
    { id: '4', name: 'Backend & Server', boardId: '3', userId: '1',
      description: 'Lorem Ipsum is simply dummy text of the' +
        ' printing and typesetting industry.',
      status: 0, date: '2020-01-6' },
    { id: '5', name: 'Edgard', boardId: '4', userId: '1',
      description: 'Lorem Ipsum is simply dummy text of' +
        ' the printing and typesetting industry.',
      status: 0, date: '2020-01-7' },
    { id: '6', name: 'Product Specification', boardId: '5', userId: '1',
      description: 'Lorem Ipsum is simply dummy text of the ' +
        'printing and typesetting industry.',
      status: 0, date: '2020-01-8' }
  ];

  constructor(private modalService: BsModalService, private snackbarService: SnackbarService) {
  }

  ngOnInit() {
  }

  dragTask($event, boardId) {
    this.tasks.find(task => task.id === $event.dragData).boardId = boardId;
  }

  openBoardForm(boardId: any, template: TemplateRef<any>) {
    const projectIndex = this.boards.findIndex((board) => board.id === boardId);
    this.selectedBoard = (projectIndex === -1) ? new Board({}) : this.boards[projectIndex];
    this.modalRef = this.modalService.show(template);
  }

  openTaskForm(boardId: any, template: TemplateRef<any>) {
    this.selectedTask.boardId = boardId;
    this.modalRef = this.modalService.show(template);
  }

  saveBoard(formData) {
    this.boards.push(this.selectedBoard);
    this.modalRef.hide();

    this.snackbarService.add({msg: 'You have saved board successfully.',
      timeout: 1000,
      action: {text: 'close', color: '#ffffff'}});

    this.selectedBoard = new Board({});
  }

  addTask(taskForm) {
    this.tasks.push(this.selectedTask);
    this.modalRef.hide();

    this.snackbarService.add({msg: 'You have added board successfully.',
      timeout: 1000,
      action: {text: 'close', color: '#ffffff'}});
    this.selectedTask = new BoardTask({});

  }

}
