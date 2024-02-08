import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      searchQuery: "",
      activeButton: "home",
    };
  },
  mutations: {
    updateSearchQuery(state, query) {
      state.searchQuery = query;
      console.log(query, state);
    },
    setActiveButton(state, button) {
      state.activeButton = button;
      console.log(button);
    },
  },
  actions: {
    setActiveButton({ commit }, button) {
      commit("setActiveButton", button);
    },
  },
  getters: {
    activeButton(state) {
      return state.activeButton;
    },
  },
});

export default store;
