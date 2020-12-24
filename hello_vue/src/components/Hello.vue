<template>
  <div>
    <h1>Hello,World</h1>
    <draggable>
      <button>ドラッグできるよ</button>
      <button>ドラッグできるぜ</button>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: "Hello",
  components: {
    draggable
  }
}
</script>
