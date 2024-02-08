import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      searchQuery: ''
    };
  },
  mutations: {
    updateSearchQuery(state, query) {
      state.searchQuery = query;
      console.log(query, state  );
    }
  }
});

export default store;
