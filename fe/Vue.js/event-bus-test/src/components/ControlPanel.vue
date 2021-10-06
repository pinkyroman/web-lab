<template>
  <div id="control-panel">
    <h2>Control Panel</h2>
    <p>{{ eventData.operationStatus }}</p>
    <button type="button" v-show="eventData.operationStatus == 'ready'" @click="startRequested">Start</button>
    <button type="button" v-show="eventData.operationStatus != 'ready'" @click="stopRequested">Stop</button>
  </div>
</template>

<script>
export default {
  name: 'control-panel',
  props: {
    eventBus: {
      type: Object,
      default: null,
    }
  },
  data() {
    return {

    }
  },
  computed: {
    eventData() {
      return this.eventBus.$data;
    }
  },
  created() {
    this.eventBus.$on('started', this.onStarted);
    this.eventBus.$on('stopped', this.onStopped);
  },
  mounted() {
    console.log(this.eventData);
  },
  methods: {
    startRequested() {
      this.eventData.params = '[Store Data]';
      console.log('sending start request ...');
      this.eventBus.$emit('start');
    },
    stopRequested() {
      console.log('sending stop request ...');
      this.eventBus.$emit('stop');
    },
    onStarted() {
      console.log('got started response.')
    },
    onStopped() {
      console.log('got stopped response.')
    }
  }
}
</script>
