import { createStore } from "vuex";

import user from "./user";

export default createStore({
  // state: {
  //   locale: "en",
  //   titleKey: "",
  //   messages: [],
  // },
  // getters: {
  //   getLocale: (s) => s.locale,
  //   getTitleKey: (s) => s.titleKey,
  //   getMessages: (s) => s.messages,
  // },
  // mutations: {
  //   setTitleKey(s, titleKey) {
  //     s.titleKey = titleKey;
  //   },
  //   addMessage(s, { icon, message }) {
  //     s.messages.push({ icon, message });
  //   },
  //   setMessages(s, messages) {
  //     s.messages = messages;
  //   },
  // },
  actions: {},
  modules: { user },
});
