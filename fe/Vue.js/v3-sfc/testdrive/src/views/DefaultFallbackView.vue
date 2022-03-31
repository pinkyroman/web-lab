<template>
  <div class="default-fallback-view">
    <div class="contents">
      <h1 class="title">DEFAULT FALLBACK VIEW</h1>
      <p>Select a menu on the top navgation bar.</p>
    </div>
  </div>
</template>

<style scoped>
.default-fallback-view {
  box-sizing: border-box;
  display: table;
  width: 100%;
  height: 300px;
  border: 3px solid rgb(61, 61, 61);
  border-radius: 0.25em;
  background-color: rgb(223, 223, 223);
}

.contents {
  display: table-cell;
  margin: 16px;
  vertical-align: middle;
  text-align: center;
}

.title {
  margin: 8px 0px;
  font-size: 1.25em;
  font-weight: bold;
  color: red;
}
</style>