import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSideNavbarOpen: false
  },
  mutations: {
    toggle_navbar(state) {
      state.isSideNavbarOpen = !state.isSideNavbarOpen;
    }
  },
  actions: {
    toggleNavbar({ commit }) {
      commit("toggle_navbar");
    }
  },
  getters: {
    isSideNavbar: state => state.isSideNavbarOpen
  }
});
