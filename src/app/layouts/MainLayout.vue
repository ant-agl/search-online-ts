<template>
  <a-flex class="main-layout" justify="center" align="center" vertical>
    <slot></slot>
  </a-flex>
</template>

<style lang="scss" scoped>
.main-layout {
  position: relative;
  max-width: 1440px;
  height: 100vh;
  margin: auto;
}
</style>
