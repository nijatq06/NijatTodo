import View from "./view.mjs";
import Model from "./model.mjs";
import Controller from "./controller.mjs";

const init = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  controller.init();
};
init();
