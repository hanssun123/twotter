export const UserModule = {
  namespaced: true,

  state: {
    user: null
  },

  // Functions that affect state
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },

  // Functions you call that call mutations
  actions: {
    setUser({ commit }, user){
      commit('SET_USER', user);
    }
  }
}
