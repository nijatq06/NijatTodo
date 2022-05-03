export default class Model {
  constructor() {
    this.arr = [];
  }
  addInput(newTask) {
    this.arr = [...this.arr, newTask];
    console.log(this.arr);
  }
  deletTask(selectIndex) {
    this.arr = this.arr.filter((el, index) => index !== selectIndex);
  }
  sortTasks() {
    this.arr = this.arr.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? -1 : 1
    );
  }
  sortTasksReverse() {
    this.arr = this.arr.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? 1 : -1
    );
  }
  changeTask(index, newTask){
    this.arr[index]=newTask;
  }
}
