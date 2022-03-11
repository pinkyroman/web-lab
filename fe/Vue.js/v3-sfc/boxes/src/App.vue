<template>
  <div id="container">
    <div class="button-box">
      <button type="button" @click="$refs.messageBox.show()">Show Message Box</button>
      <button type="button" @click="">Get Users</button>
    </div>
    <div class="users">
      <Users />
    </div>
  </div>

  <MessageBox ref="messageBox">
    <template #title>Lorem Ipsum</template>
    <template #message>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor est non sem semper porttitor. Suspendisse mollis a lorem vel molestie. Curabitur eu scelerisque mauris. Curabitur mi velit, auctor quis dignissim ut, ultricies quis odio. Fusce at mi ut ligula euismod fermentum.
    </template>
    <template #buttons>
      <!-- <button type="button" @click="$refs.messageBox.hide()">Close</button> -->
    </template>
  </MessageBox>
</template>

<style>
@import './assets/base.css';

div#container {
  margin: 32px auto;
  padding: 16px;
  width: 600px;
  text-align: center;
  border: 2px solid black;
}

div#container .button-box {
  display: inline-block;
}

div#container .users {
  margin: 8px auto;
  padding: 8px;
  border: 1px solid blue;
  border-radius: 4px;
}

button {
  margin: 4px 8px;
  padding: 8px;

  width: 180px;
}
</style>

<script setup>
import MessageBox from './components/MessageBox.vue';
import Users from './components/Users.vue';

</script>

