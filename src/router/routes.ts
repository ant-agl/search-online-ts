import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    meta: {
      titleKey: "StartPage",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/components/StartPage.vue"),
  },
  {
    path: "/main",
    name: "HeaderMenu",
    meta: {
      titleKey: "HeaderMenu",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/signin",
    name: "SignInView",
    meta: {
      titleKey: "SignInView",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/signup",
    name: "SignUpView",
    meta: {
      titleKey: "registration",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/forgot",
    name: "ResetPasswordView",
    meta: {
      titleKey: "ResetPasswordView",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/views/ResetPasswordView.vue"),
  },
  {
    path: "/verify/:resetpassword?",
    name: "CheckCode",
    meta: {
      titleKey: "CheckCode",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/CheckCode.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      titleKey: "Profile",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    path: "/test",
    name: "Test",
    meta: {
      titleKey: "Test",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/TestView.vue"),
  },

  {
    path: "/afterregistrationprofileview",
    name: "AfterRegistrationProfileView",
    meta: {
      titleKey: "AfterRegistrationProfileView",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/AfterRegistrationProfileView.vue"),
  },
  {
    path: "/orgafterregistrationprofileview",
    name: "OrgAfterRegistrationProfileView",
    meta: {
      titleKey: "OrgAfterRegistrationProfileView",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/views/OrgAfterRegistrationProfileView.vue"),
  },
];

export default routes;
