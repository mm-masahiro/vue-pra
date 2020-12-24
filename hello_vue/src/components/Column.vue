<template>
 <div class="column">
  <div class="column--frame">
    <div class="column--title">タイトル</div>
    <div class="column--content">
      <draggable>
        <li v-for="item in items" :key="item.no">{{item.name}}</li>
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
}

.column--frame {
  width: 300px;
  height: 100%;
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
