<template>
  <div class="wrapper-filling">
    <div class="filling">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-filling {
  overflow: auto;
  width: 100%;
  padding: 130px;
}

.filling {
  width: 100%;
  border-radius: 20px;
  background-color: white;
  max-width: 1440px;
  box-shadow: 1px 1px 10px rgb(0, 0, 0, 15%);
  border: 1px solid #f0f0f0;
  padding-bottom: 30px;
  position: relative;
}
</style>
