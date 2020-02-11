export class TodoItem {
  id: string;
  title: string;
  state: boolean;

  constructor(title?: string, id?: string, state?: boolean) {
    this.title = title;
    this.id = id;
    this.state = state;
  }
}
