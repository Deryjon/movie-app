import { createStore } from 'vuex';

export default createStore({
  state: {
    activeButton: 'home'
  },
  mutations: {
    setActiveButton(state, button) {
      state.activeButton = button;
    }
  },
  actions: {
    setActiveButton({ commit, state }, button) {
      commit('setActiveButton', button);
      console.log(state.activeButton);
    }
  },
  getters: {
    activeButton(state) {
      return state.activeButton;
      console.log(state.activeButton);

    }
  }
});
