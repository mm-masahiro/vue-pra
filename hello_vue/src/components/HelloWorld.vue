<template>
  <div class="hello">
    <h1 class="top--title">{{ title }}</h1>
    <h2 v-show="showText">{{ text }}</h2>
    <!-- v-onでイベント発火時の JavaScript の実行が可能に -->
    <!-- ↓は、toggle関数の呼び出し -->
    <!-- <button v-on:click="toggle">toggle</button> -->
    <div>
      <!-- <Hello /> -->
    </div>
  </div>
</template>

<script>
import Hello from "./Hello.vue"
export default {
  name: 'HelloWorld',
  components: {
    Hello
  },
  data() {
    return {
      title: 'Trello Copy',
      showText: true
    };
  },
  methods: {
    toggle: function() {
      // data内で定義した値はthis.~~~のようにthisを使って参照していく
      this.showText = !this.showText
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top--title {
  font-weight: bold;
  text-align: left;
}
</style>
