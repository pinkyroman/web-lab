<template>
  <div ref="messageBox" class="message-box hidden">
      <div ref="container" class="message-box-container">

      </div>
  </div>
</template>

<style scoped>
.message-box {
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;

    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    
    background-color: rgba(44, 44, 44, 0.8);
}

.message-box-container {
    position: absolute;
    box-sizing: border-box;

    top: -400px;
    left: calc(50% - 200px);
    /* transform: translate(-50%, -50%); */
    /* transform: translate(-50%, -200%); */
    width: 400px;
    height: 200px;
    
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

    transition-delay: 0.4s;
}

.hidden {
    display: none;
}

.shown {
    display: block;
}
</style>

<script setup>
import { onMounted, onUnmounted, getCurrentInstance } from 'vue';

const self = getCurrentInstance();

onMounted(() => {
});

function onKeyDown(e) {
    if (e.key === 'Escape') {
        hide();
    }
}

function removeKeyDownEventHandler() {
    // 이벤트 핸들러 등록 해제
    window.removeEventListener('keydown', onKeyDown, true);
}

onUnmounted(() => {
    removeKeyDownEventHandler();
});

///////////////////////////////////////////////////////////////////////////////
// exported methods

defineExpose({
    show,
});

function show() {
    const classes = self.refs.messageBox.classList;
    classes.remove('hidden');
    classes.add('shown');

    window.addEventListener('keydown', onKeyDown, true);

    const style = self.refs.container.style;
    // style.transform = 'translate(-50%, -50%)';
    style.top = '100px';
}

function hide() {
    const classes = self.refs.messageBox.classList;
    classes.add('hidden');
    classes.remove('shown');

    removeKeyDownEventHandler();    
}


</script>