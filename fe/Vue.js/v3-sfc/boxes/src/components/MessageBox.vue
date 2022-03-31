<template>
    <!-- 참고 소스: https://vuejs.org/examples/#modal -->
    <Teleport to="body">
        <Transition name="message-box">
            <div ref="messageBoxBackdrop" class="message-box-backdrop" v-if="showMessageBox">
                <div class="message-box-wrapper">
                    <div ref="messageBox" class="message-box">
                        <div class="message-box-title">
                            <slot name="title">
                                Untitled
                            </slot>
                        </div>
                        <div class="message-box-message">
                            <slot name="message">
                                No message
                            </slot>
                        </div>
                        <div class="message-box-footer">
                            <div class="message-box-buttons">
                                <slot name="buttons">
                                    <button type="button" @click="this.hide()">OK</button>
                                </slot>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.message-box-backdrop {
    box-sizing: border-box;
    position: fixed;
    z-index: 9998;
    
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: optcity 0.3s ease;
}

.message-box-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.message-box {    
    box-sizing: border-box;
    margin: 0px auto;
    width: 400px;
    
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.33);

    transition: all 0.3s ease;
}

.message-box-title {
    padding: 8px 0px;
    text-align: center;

    border-bottom: 1px dashed blue;
}

.message-box-message {
    padding: 8px;
    border-bottom: 1px dashed blue;
}

.message-box-footer {
    padding: 8px;
    text-align: center;    
}

.message-box-buttons {
    display: inline-block;
}


/* Transition */
.message-box-enter-from {
    opacity: 0;
}

.message-box-leave-to {
    opacity: 0;
}

.message-box-enter-from .message-box,
.message-box-leave-to .message-box {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>

<script setup>
import { ref, onUnmounted } from 'vue';

const emit = defineEmits(['opened', 'closed']);
const showMessageBox = ref(false);

///////////////////////////////////////////////////////////////////////////////
// Lifecycle Hooks

onUnmounted(() => {
    removeKeyDownEventHandler();
});

function removeKeyDownEventHandler() {
    // 이벤트 핸들러 등록 해제
    window.removeEventListener('keydown', onKeyDown, true);
}

function onKeyDown(e) {
    if (e.key === 'Escape') {
        hide();
    }
}

///////////////////////////////////////////////////////////////////////////////
// define exposed methods

defineExpose({
    show,
    hide,
});

///////////////////////////////////////////////////////////////////////////////
// methods

function show() {
    showMessageBox.value = true;
    window.addEventListener('keydown', onKeyDown, true);

    emit('opened');
}

function hide() {
    removeKeyDownEventHandler();    

    showMessageBox.value = false;    
    emit('closed');
}
</script>