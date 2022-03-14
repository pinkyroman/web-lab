<template>
  <div class="app-contents">
    <component :is="component"/>
  </div>
</template>

<script setup>
import { ref, watch, markRaw } from 'vue';

const props = defineProps({
  currentView: {
    type: String,
  },
  fallbackView: {
    type: String,
    default: '../views/DefaultFallbackView.vue',
  },
});

const component = ref(undefined);

watch(() => props.currentView, () => {
  loadComponent();
});

watch(() => props.fallbackView, () => {
  loadComponent();
});

function loadComponent() {
  const c = (props.currentView == null || props.currentView.length === 0) ?
      props.fallbackView : props.currentView;
  loadModule(c);  
}

function loadModule(module) {
  import(module).then(m => {
    const comp = m.default;
    component.value = markRaw(comp);
  }).catch(err => {
    console.error(`failed to load component: '${module}': ${err}`);    
  });
}
</script>
