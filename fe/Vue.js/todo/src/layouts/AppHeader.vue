<template>
  <div class="app-header simple">
    <div>
      <span class="logo">
        <img alt="app logo" src="../assets/logo.png" width="32" height="32" />
      </span>
      <span class="header-title">Simple To Do</span>
    </div>
    <div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header-title {
  font-size: 20pt;
  font-weight: bold;
}
</style>
