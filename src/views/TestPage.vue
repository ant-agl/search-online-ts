<template>
  <div class="parallax-section">
    <div class="content">
      <h1>Параллакс с кругом</h1>
      <p>Прокрутите вниз, чтобы увидеть, как круг остаётся на месте.</p>
    </div>
  </div>
  <div class="normal-section">
    <h2>Обычная секция</h2>
    <p>Содержимое без параллакса.</p>
  </div>
</template>
<style>
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.parallax-section {
  height: 100vh; /* Полная высота окна браузера */
  background: url("https://via.placeholder.com/200") no-repeat center center;
  background-size: 200px 200px;
  background-attachment: fixed; /* Фон остаётся на месте при прокрутке */
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
  text-align: center;
}

.normal-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
}
</style>
