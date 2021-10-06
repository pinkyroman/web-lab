<template>
  <div class="hello">
    <select v-model="current">
      <option v-for="topic in topics" :key="topic.name" v-bind:value="topic.value">
        {{topic.name}}
      </option>
    </select>
    <div v-for="item in list" :key="item.fullname">{{item.full_name}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    topics: Array,
  },
  data: function () {
    return {
      list: [],
      current: "",
    }
  },
  watch: {
    current: function (val) {
      axios.get("https://api.github.com/search/repositories", {
        params: { q: "topic: " + val }
      }).then(function (response) {
        console.log(`response.data.items.length = ${response.data.items.length}`);
        this.list = response.data.items;
      }.bind(this));
    },
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
