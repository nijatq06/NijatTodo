export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  buttonSortTasks() {
    this.view.sortButton.addEventListener("click", (e) => {
      if (e.target.className === "sort-asc") {
        this.model.sortTasks();
      } else {
        this.model.sortTasksReverse();
      }
      this.renderItems();
      e.target.classList.toggle("sort-desc");
    });
  }
  renderItems() {
    this.view.ul.innerHTML = "";
    this.model.arr.forEach((el, index) => {
      this.newLi = this.view.createLi({
        class: "addNewTask",
      });

      this.newInput = this.view.createInput({
        text: el,
        name: "inputTask",
        class: "inputTask",
      });

      this.newInput.addEventListener("keyup", (event) => {
        this.model.changeTask(index, event.target.value);
      });

      this.deletButton = this.view.createButton({
        class: "deletTask",
        type: "button",
        text: "x"
      });

      this.deletButton.addEventListener("click", () => {
        this.model.deletTask(index);
        this.renderItems();
        if (this.view.ul.innerHTML === "") {
          this.view.ul.className = "";
        }
      });
      this.view.ul.append(this.newLi);
      this.newLi.append(this.newInput);
      this.newLi.append(this.deletButton);
    });
  }
  clearInput() {
    this.view.clearInputValue.addEventListener("click", () => {
      this.view.input.value = "";
    });
  }

  initForm() {
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const newTask = data.get("taskInput");
      if (newTask !== "") {
        this.view.ul.className = "allList";
        this.model.addInput(newTask);
        this.renderItems();
        this.view.input.value = "";
      }
    });
  }

  init() {
    this.view.init();
    this.initForm();
    this.buttonSortTasks(); 
    this.clearInput();
  }
}
