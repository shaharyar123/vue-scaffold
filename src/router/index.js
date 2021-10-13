import Vue from "vue";
import Router from "vue-router";
import Store from "../store";

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
    },
    {
      path: "/protected-route",
      name: "protected-route",
      beforeEnter: authGuard,
      component: () => import("../views/protected")
    }
  ]
});

function authGuard(to, from, next) {
  // considering boolean here as a token just for demo purpose
  const token = Store.getters.isSideNavbar;

  if (token) {
    // if here means everything seems goods no need to redirect anywhere forcefully
    next();
  } else {
    // if not logged in or token not found, redirect to login or any public route.
    // in my case redirecting to home.
    next("/"); // go to '/login';
  }

  next();
}
