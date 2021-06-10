import {UUID} from "angular2-uuid";

export class Board {
  id?: string;
  title?: string;
  color?: string;

  constructor(board) {
    {
      this.id = board.id || UUID.UUID();
      this.title = board.title || '';
      this.color = board.color || 'bg-primary';
    }
  }
}
