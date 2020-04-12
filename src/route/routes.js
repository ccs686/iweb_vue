// 当前文件是  routes.js
import Home from "../pages/Home";
import Teacher from "../pages/Teacher";
import Address from "../pages/Address";
import Course from "../pages/Course";
import CourseDetail from "../pages/CourseDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import OrderConfirm from "../pages/OrderConfirm";
import UserCenter from "../pages/user/Center";
import Animate from "../components/Animate";

export const routes = [
  {
    path: "/animate",
    name: "animate",
    component: Animate,
    meta: { title: "动画-i前端在线课程", tx: 1 }
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "首页-i前端在线课程", tx: 2 }
  },
  {
    path: "/course",
    name: "course",
    component: Course,
    meta: { title: "课程-i前端在线课程", tx: 3 }
  },
  {
    path: "/course_detail",
    name: "course_detail",
    component: CourseDetail,
    meta: { title: "课程详情-i前端在线课程", tx: 4 }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { title: "注册-i前端在线课程", tx: 5 }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "登录-i前端在线课程", tx: 6 }
  },
  {
    path: "/user_center",
    name: "user_center",
    component: UserCenter,
    meta: { title: "个人中心-i前端在线课程", tx: 7 }
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: { title: "购物车-i前端在线课程", tx: 8 }
  },
  {
    path: "/order_confirm",
    name: "order_confirm",
    component: OrderConfirm,
    meta: { title: "订单-i前端在线课程", tx: 9 }
  },
  {
    path: "/address",
    name: "address",
    component: Address,
    meta: { title: "校区地址-i前端在线课程", tx: 10 }
  },
  {
    path: "/teacher",
    name: "teacher",
    component: Teacher,
    meta: { title: "名师堂-i前端在线课程", tx: 11 }
  }
];
