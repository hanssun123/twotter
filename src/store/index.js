import { createStore } from 'vuex';
import { UserModule } from './User';

export default createStore({
  state: {},

  // Functions that affect state
  mutations: {},

  // Functions you call that call mutations
  actions: {},

  modules: {
    User: UserModule
  }
});
