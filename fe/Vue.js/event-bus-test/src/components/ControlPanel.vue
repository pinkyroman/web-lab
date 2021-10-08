<template>
  <div id="control-panel">
    <div class="panel">
      <h2>Control Panel</h2>
      <p>{{ eventData.operationStatus }}</p>
      <button type="button" v-show="eventData.operationStatus == 'ready'" @click="startRequested">Start</button>
      <button type="button" v-show="eventData.operationStatus != 'ready'" @click="stopRequested">Stop</button>
    </div>
    <div class="test">
      <button type="button" @click="runTest">Run Test</button>
    </div>
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
    },
    runTest() {
      // this.p1(false).then((message) => {
      //   console.log('okay, all done.');
      // }).catch((error) => {
      //   console.log(`failed: ${error}`);
      // });
      this.p1(true).then(this.p2).then((msg) => {
        console.log(msg);
        console.log('ALL DONE!');
      }).catch((error) => {
        console.log(error);
      });
    },
    p1(forceError) {
      let data = this.eventData.operationStatus;
      return new Promise((resolve, reject) => {
        console.log('Process the first task ...');
        if (forceError) {
          reject('error triggered by force!');
          return;
        }
        // resolve('the first task has been done successfully.');
        resolve(data);
        // resolve();
      });
    },
    p2(pmsg) {
      return new Promise((resolve, reject) => {
        console.log(pmsg);
        console.log('Process the 2nd task ...');
        if (pmsg == null) {
          reject('error triggered by p2!!!');
          return;
        }
        resolve('the 2nd task has been done successfully.');
      });
    },
  }
}
</script>
