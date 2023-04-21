
import state from "./state";
//las mutaciones pueden tener muchas exportaciones por eso exporto todo
import * as mutations from "./mutations";
import * as actions from "./actions";

const counterStore = {
  namespaced: true,

  //se puede dejar solo como state
  state: state,

  mutations: mutations,

  actions: actions,
};

export default counterStore;
