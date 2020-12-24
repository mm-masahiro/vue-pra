<template>
 <div class="column">
  <div class="column--frame">
    <div class="column--title">タイトル</div>
    <div class="column--content">
      <draggable>
        <li v-for="item in items" :key="item.no">{{item.name}}</li>
      </draggable>
      <div>ccc</div>
    </div>
  </div>
 </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    'draggable': draggable,
  },
  data: {
    items: [
      {no:1, name: "hoge"},
      {no:2, name: "foo"}
    ]
  }
}
</script>

<style>

.column {
  padding: 20px;
}

.column--frame {
  width: 300px;
  height: 100px;
  background-color: grey;
  border-radius: 5px;
}

.column--title {
  color: white;
}

.column--content__frame {
  background-color: white;
  border-radius: 5px;
  width: 70%;
}

</style>
