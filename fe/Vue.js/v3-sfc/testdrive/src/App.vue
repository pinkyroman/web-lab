<template>
  <!-- <div>{{ title }}</div>
  <div>{{ message }}</div> -->
  <div>{{ titleX }}</div>
  <div>{{ messageX }}</div>
  <div>{{ data.title }}</div>
  <div>{{ data.message }}</div>
  <div>
    <button type="button" @click="onButtonClicked">Click</button>
  </div>
</template>

<style scoped>
@import './assets/base.css';

head {
  font-size: 3rem;
  color: black;
}

</style>

<script setup>
import { ref, reactive, onMounted } from 'vue';

onMounted(() => {
  console.log('App mounted.');
});

// <script setup> 내에서 선언한 변수는 바인딩은 가능하나 반응형은 아님.
const titleX = 'Hello, X!';
// 반응형 데이터를 생성. 값을 변경 하려면 value 프로퍼티를 사용해야 한다.
const messageX = ref('This is a message from Vue 3.');

// 프록시 객체를 반환. value 프로퍼티를 사용하지 않고 직접 프록시 객체를 사용.
const data = reactive({
  title: 'Hello, Vue 3 !!!',
  message: 'Do you know Kimchi?',
});

function onButtonClicked() {
  data.message = 'You clicked the button!';
}
</script>
