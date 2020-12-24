<template>
 <div class="column">
  <div class="column--frame">
    <div class="column--title">タイトル</div>
    <div class="column--content">
      <draggable>
        <div class="column--content__list" v-for="item in items" :key="item.no">{{item.name}}</div>
      </draggable>
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
  data: function() {
    return {
      items: [
        {no:1, name: "Rails"},
        {no:2, name: "Vue"},
        {no:3, name: "Go"}
      ]
    }
  }
}
</script>

<style>

.column {
  padding: 20px;
  height: 100%;
}

.column--frame {
  width: 300px;
  height: 100%;
  background-color: grey;
  border-radius: 5px;
}

.column--title {
  color: white;
  margin-bottom: 20px;
}

.column--content__frame {
  background-color: white;
  border-radius: 5px;
  width: 70%;
}

.column--content__list {
  list-style: none;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

</style>
