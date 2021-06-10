import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import Email from '../../../../fake-api/json/Email.json';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  tabNavItems = Email.tabItems;

  inboxItems = Email.inbox;
  starredItems = Email.starred;
  snoozedItems = Email.inbox;
  draftItems = Email.starred;
  sentItems = Email.inbox;
  trashItems = Email.deleted;
  importantItems = Email.starred;
  spamItems = Email.deleted;

  emailDetailsActive = false;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  showEmailDetails($event: string) {

    this.emailDetailsActive = $event !== 'hide';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'compose-popup modal-sticky-bottom-right modal-sticky-lg', id: 'compose-email-popup' })
    );
  }

}
