import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    // redirect to default path `home`
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home")
    }
  ]
});
