import type { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/start",
  //   name: "StartPage",
  //   meta: {
  //     titleKey: "StartPage",
  //     layout: "auth",
  //     noauth: true,
  //   },
  //   component: () => import("@/components/StartPage.vue"),
  // },
  // {
  //   path: "/",
  //   name: "HeaderMenu",
  //   meta: {
  //     titleKey: "HeaderMenu",
  //     layout: "auth",
  //     noauth: true,
  //   },
  //   component: () => import("@/views/MainPage.vue"),
  // },
  {
    path: "/login",
    name: "login",
    meta: {
      titleKey: "login",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/pages/Auth/LoginPage"),
  },
  {
    path: "/repair-password",
    name: "repair-password",
    meta: {
      titleKey: "repairPassword",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/pages/Auth/RepairPasswordPage"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: {
      titleKey: "registration",
      layout: "auth",
      noauth: true,
    },
    component: () => import("@/pages/Auth/RegistrationPage"),
  },
  {
    path: "/user-type-selection",
    name: "user-type-selection",
    meta: {
      titleKey: "userTypeSelection",
      layout: "auth",
      noauth: true,
      props: true,
    },
    component: () => import("@/pages/Auth/UserTypeSelectionPage"),
  },
  {
    path: "/profile-filling",
    name: "profile-filling",
    meta: {
      titleKey: "profile-filling",
      noauth: true,
      props: true,
    },
    component: () => import("@/pages/Profile/ProfileFillingPage"),
  },
  {
    path: "/product-filling",
    name: "product-filling",
    meta: {
      titleKey: "product-filling",
      noauth: true,
      props: true,
    },
    component: () => import("@/pages/Profile/ProductFillingPage"),
  },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   meta: {
  //     titleKey: "Profile",
  //     layout: "auth",
  //     noauth: true,
  //     props: true,
  //   },
  //   component: () => import("@/views/ProfileView.vue"),
  // },
  // {
  //   path: "/test",
  //   name: "Test",
  //   meta: {
  //     titleKey: "Test",
  //     layout: "auth",
  //     noauth: true,
  //     props: true,
  //   },
  //   component: () => import("@/views/TestPage.vue"),
  // },

  // {
  //   path: "/afterregistrationprofileview",
  //   name: "AfterRegistrationProfileView",
  //   meta: {
  //     titleKey: "AfterRegistrationProfileView",
  //     layout: "auth",
  //     noauth: true,
  //     props: true,
  //   },
  //   component: () => import("@/views/AfterRegistrationProfileView.vue"),
  // },
  // {
  //   path: "/orgafterregistrationprofileview",
  //   name: "OrgAfterRegistrationProfileView",
  //   meta: {
  //     titleKey: "OrgAfterRegistrationProfileView",
  //     layout: "auth",
  //     noauth: true,
  //     props: true,
  //   },
  //   component: () => import("@/views/OrgAfterRegistrationProfileView.vue"),
  // },
  // {
  //   path: "/menuprofile",
  //   name: "MenuProfile",
  //   meta: {
  //     titleKey: "MenuProfile",
  //     layout: "auth",
  //     noauth: true,
  //     props: true,
  //   },
  //   component: () => import("@/components/MenuProfile.vue"),
  // },
  // {
  //   path: "/afterregistration:param",
  //   name: "AfterRegistration",
  //   meta: {
  //     titleKey: "AfterRegistration",
  //     layout: "auth",
  //     noauth: true,
  //     props: true,
  //   },
  //   component: () =>
  //     import("@/components/fillingAfterRegistration/FormaFilling.vue"),
  // },
];

export default routes;
