<template>
    <div id="app">
        <img src="./assets/logo.png" />
        <h1>{{ msg }}</h1>
        <div class="contents">
            <control-panel :event-bus="$eventBus"></control-panel>
            <message-dump-panel :event-bus="$eventBus"></message-dump-panel>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import ControlPanel from './components/ControlPanel.vue';
import MessageDumpPanel from './components/MessageDumpPanel.vue';

const eventBus = new Vue({
    data: {
        params: '',
        operationStatus: 'ready',
    }
});

export default {
    name: 'app',
    components: {
        'control-panel': ControlPanel,
        MessageDumpPanel,
    },
    data() {
        return {
            msg: 'Event Bus Testdrive',
            // eventBus: null,
        }
    },
    created() {
        // this.eventBus = new Vue({
        //   data: {
        //     params: '',
        //     operationStatus: 'ready',
        //   }
        // });
        this.$eventBus = eventBus;

        // regex 테스트
        const regex = /^(?<date>[0-9]{4})\s*\|\s*(?<time>\d{2}\:\d{2}:\d{2}).+(\|\s*MDN\s*\:\s*(?<mdn>\d+)).+(\|\s*N->N\s*COUNT\s*\:\s*(?<count>\d+)).*/;
        var pattern = '0930| 05:33:30| 1|MDN : 01067003951 | TARIFF : MVNOTING CJHV_LTE26 | BLOCK_SVC N | C_TIME : 2021/09/23 05:35:32.600668 | UP_TIME : 2021/09/23 05:35:32.600668 | DB STAT : 0 | RCV STAT : 2 |N->N COUNT : 3\r\n';

        let matched = pattern.match(regex);
        if (matched != null) {
            console.log(matched.groups);
            let parsed = matched.groups; // { date: '...', time: '', mdn: '...', count: '...' }
            let timestamp = parseInt(parsed.date + parsed.time.replace(":", ""));
            console.log(timestamp);
        } else {
            console.log(`NOT MATCHED (${matched}) !!!`);
        }
    }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    /* display: inline-block; */
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
