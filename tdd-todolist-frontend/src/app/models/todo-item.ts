// export class TodoItem {
//   id: string;
//   title: string;
//   state: boolean;

//   constructor(values: object = {}) {
//     Object.assign(this, values);
//   }
// }

export interface TodoItem {
  id?: string;
  title: string;
  state: boolean;
}
