import {UUID} from "angular2-uuid";

export class BoardTask {
  id?: string;
  name?: string;
  boardId?: string;
  date?: string;
  userId?: string;
  description?: string;
  status?: number;

  constructor(board) {
    {
      this.id = board.id || UUID.UUID();
      this.name = board.name || '';
      this.boardId = board.boardId || '1';
      this.date = board.date || '25/2/2019';
      this.userId = board.userId || '1';
      this.description = board.description || '';
      this.status = board.status || 1;
    }
  }
}
