export default class View {
  constructor() {
    this.mainButton = null;
    this.root = document.getElementById("root");
  }
  init() {
    this.top = this.createDiv({ class: "top" });
    this.addBtn = this.createButton({
      class: "addBtn",
    });

    this.addBtnText = this.createButton({ class: "buttonText", text: "Добавить" });
    this.paragraph = this.createParagraph({
      text: "To-do list",
      class: "paragr",
      id: "paragraph",
    });
    this.inputSortDiv=this.createDiv({class: "todoText"});
    this.form = this.createForm({ class: "todoList" });
    this.input = this.createInput({ class: "addTask",name:"taskInput" });
    this.ul=this.createUl({id: "allList"});
    this.buttonPlus = this.createButton({ class: "buttonPlus",type: 'button',text: '+'});
    this.sortReverseButton=this.createDiv({class: "sort-desc", type: "button"});
    this.sortButton=this.createDiv({class: "sort-asc", 
    type: "button"});
    this.clearInputButton=this.createDiv({class: "clearInputButton", 
    });
    this.inputSortDiv.append(this.paragraph); 
    this.inputSortDiv.append(this.sortButton); 
    this.inputSortDiv.append(this.clearInputButton); 
    this.inputSortDiv.append(this.input);
    this.input.append(this.clearInputButton);
    this.addBtn.append(this.buttonPlus); 
    this.addBtn.append(this.addBtnText); 
    this.form.append(this.top); 
    this.form.append(this.inputSortDiv); 
    this.form.append(this.ul); 
    this.form.append(this.addBtn); 
    this.root.append(this.form); 
  }
  createButton(props) {
    const button = document.createElement("button");
    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.id && (button.id = props.id);
    props.type && (button.type = props.type);
    return button;
  }
  createInput(props) {
    const input = document.createElement("input");
    props.text && (input.value = props.text);
    props.name && (input.name = props.name);
    props.class && (input.className = props.class);
    props.id && (input.id = props.id);
    return input;
  }
  createParagraph(props) {
    const p = document.createElement("p");
    props.text && (p.innerText = props.text);
    props.class && (p.className = props.class);
    props.id && (p.id = props.id);
    return p;
  }
  createDiv(props) {
    const div = document.createElement("div");
    props.class && (div.className = props.class);
    props.id && (div.id = props.id);
    props.text && (div.innerText = props.text);
    return div;
  }
  createImg(props) {
    const img = document.createElement("img");
    props.class && (img.className = props.class);
    props.src && (img.src = props.src);
    return img;
  }
  createForm(props) {
    const form = document.createElement("form");
    props.id && (form.id = props.id);
    return form;
  }
  createUl(props) {
    const ul = document.createElement("ul");
    props.class && (ul.className = props.class);
    return ul;
  }
  createLi(props) {
    const li = document.createElement("li");
    props.text && (li.innerText = text);
    props.class && (li.className = props.class);
    props.id || props.id === 0 && (li.id = props.id); 
    props.draggable && (li.draggable = props.draggable); 
    return li;
  }
}
