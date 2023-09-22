import TasksPage from "../pages/TasksPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import ForgetPassword from "../pages/ForgetPassword.vue";
import ListsPage from "../pages/ListsPage.vue";
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/blogs",
    component: TasksPage,
    name: "blogs",
    meta: {
      auth: true,
    },
  },
  {
    path: "/lists",
    component: ListsPage,
    name: "lists",
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
    meta: {
      guest: true,
    },
  },
  {
    path: "/forget-password",
    component: ForgetPassword,
    name: "forget-password",
    meta: {
      guest: true,
    },
  },
  {
    path: "/:notFound(.*)",
    name: "error.404",
    component: NotFoundErrorPage,
  },
];

export default routes;
