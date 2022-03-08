<template>
  <div id="container">
    <div class="button-box">
      <button type="button" @click="onShowMessageBoxButtonClicked">Show Message Box</button>
      <button type="button" @click="onShowModalBoxButtonClicked">Show Modal Box</button>
    </div>
  </div>
  <MessageBox ref="messageBox"></MessageBox>
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

button {
  margin: 0px 8px;
  padding: 8px;
}


</style>

<script setup>
import { getCurrentInstance } from 'vue';
import MessageBox from './components/MessageBox.vue';

const self = getCurrentInstance();

function onShowMessageBoxButtonClicked() {
  self.refs.messageBox.show();
}

function onShowModalBoxButtonClicked() {
  console.warn('onShowModalBoxButton not implemented yet.');
}

</script>

