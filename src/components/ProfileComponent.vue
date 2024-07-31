<script setup>
import { ref } from "vue";

import SettingMyProfile from "@/components/SettingMyProfile.vue";
import SettingOrganization from "@/components/SettingOrganization.vue";

const switcher = ref("profile");
const navElements = [
  {
    id: "profile",
    name: "Настройки профиля",
  },
  {
    id: "org",
    name: "Настройки юридических данных",
  },
];
</script>

<template>
  <!--end col-->
  <div class="col-lg-8">
    <div class="card profile-content-page mt-4 mt-lg-0">
      <ul
        class="profile-content-nav nav nav-pills border-bottom mb-4"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" v-for="item in navElements" :key="item.id">
          <button
            class="nav-link"
            :class="{ active: item.id == switcher }"
            @click="switcher = item.id"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
      <!--end profile-content-nav-->
      <div class="card-body p-4">
        <div class="tab-content" id="pills-tabContent">
          <SettingMyProfile v-show="switcher == 'profile'" />
          <SettingOrganization v-show="switcher == 'org'" />
          <!--end tab-pane-->
        </div>
        <!--end tab-content-->
      </div>
      <!--end card-body-->
    </div>
    <!--end profile-content-page-->
  </div>
  <!--end col-->
</template>
