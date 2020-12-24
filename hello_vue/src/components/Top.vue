<template>
  <div>
    <h1 class="top--title">Trello Coopy</h1>
    <Column />
  </div>
</template>

<script>
import Column from "./Column"
export default {
  components: {
    Column
  }
}
</script>

<style>
.top--title {
  font-size: 40px;
  text-align: left;
  font-weight: bold;
}
</style>
