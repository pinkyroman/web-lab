<script setup>
// import WelcomeItem from "./WelcomeItem.vue";
// import DocumentationIcon from "./icons/IconDocumentation.vue";
// import ToolingIcon from "./icons/IconTooling.vue";
// import EcosystemIcon from "./icons/IconEcosystem.vue";
// import CommunityIcon from "./icons/IconCommunity.vue";
// import SupportIcon from "./icons/IconSupport.vue";

import { useCounterStore } from "../stores/counter.js";

const counterStore = useCounterStore();
</script>

<template>
  <h1>Counter: {{ counterStore.value }}</h1>
  <button @click="counterStore.increment()">+</button>
  <button @click="counterStore.decrement()">-</button>
</template>
