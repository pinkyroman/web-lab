<template>
  <div id="message-dump-panel">
    <h2>Messages</h2>
    <ul>
      <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'message-dump-panel',
  props: {
    eventBus: {
      type: Object,
      default: null,
    }
  },
  created() {
    this.eventBus.$on('start', this.onStartRequested);
    this.eventBus.$on('stop', this.onStopRequested);
  },
  data() {
    return {
      timerId: null,
      logs: [],
    }
  },
  computed: {
    eventData() {
      return this.eventBus.$data;
    }
  },
  methods: {
    onStartRequested() {
      console.log('got start request.');

      let task = this.eventData.params;
      let count = 0;

      this.timerId = setInterval(() => {
        this.logs.push(`processing requested task: ${task}/${count}.`);
        count++;

        if (count > 5) {
          this.stopTask();
          console.log('all tasks done.');

          this.sendStoppedEvent();
        }
      }, 1000);

      this.eventData.operationStatus = 'processing';
      console.log('sending started response ...');
      this.eventBus.$emit('started');
    },
    stopTask() {
      if (this.timerId != null) {
        clearInterval(this.timerId);
      }
    },
    onStopRequested() {
      console.log('got stop request.');
      console.log('canceling in progress ...');
      this.stopTask();
      console.log('canceled.');
      this.sendStoppedEvent();
    },
    sendStoppedEvent() {
      console.log('sending stopped response ...');
      this.logs = [];
      this.eventData.operationStatus = 'ready';
      this.eventBus.$emit('stopped');
    }
  }
}
</script>
