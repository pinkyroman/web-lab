<template>
  <div class="image-card">
    <!-- <img class="image-card__image" src="../assets/cat2.jpg"/> -->
    <img class="image-card__image" :src="imagePath"/>
    <div class="image-card__body">
      <h3>{{heading}}</h3>
      <div class="image-card__author">{{text}}</div>
      <button class="image-card__heart" @click="count++">
        <svg viewBox="0 0 32 29.6">
          <path d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454 C30,20.335,16,28.261,16,28.261z"/>
        </svg>
      </button>
      <div class="image-card__count" v-if="count > 0">{{count}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    heading: String,
    text: String,
    imageSrc: String,
  },
  data: function () {
    return {
      count: 0,
    }
  },
  computed: {
    imagePath: function () {
      return "../assets/" + this.imageSrc;
    }
  }
}
</script>

<style scoped>
.image-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1rem;
  border-radius: 5px;
  color: #555;
  box-shadow: 0 0 3px 0 #aaa;
  background: #fff;
  user-select: none;
}

.image-card:hover {
  box-shadow:0 0 3px 0 #777;
}

.image-card__image {
  width: 300px;
  border-radius: 5px 5px 0 0;
  height: auto;
}

.image-card__body {
  display: flex;
  flex-direction: column;

  padding: 1rem;
}

.image-card__body h3 {
  margin-top: 0;
  margin-bottom: 0.2rem;
}

.image-card__author {
  margin: 0;
  font-size: 0.8rem;
  color: #999;
}

.image-card__heart {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 24px;
  height: 24px;

  /* reset button */
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;

  -webkit-appearance: none;
  -moz-appearance:    none;
       appearance:    none;

  cursor: pointer;

  fill: #fff;
  stroke: white;
  stroke-width: 2px;

  transition: all .35s ease-out;
}

.image-card__count {
  position: absolute;
  top: 1.2rem;
  left: 3rem;
  width: 24px;
  height: 24px;
  
  color: #FFF;
}

.image-card__heart:hover {
  fill: #fe4365;
  stroke: #fe4365;
}

.image-card__status {
  margin: 0.5rem 0;
  font-size: 0.8rem;
}
</style>
