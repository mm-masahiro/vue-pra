<template>
 <div class="column">
  <div class="column--frame">
    <div class="column--title">タイトル</div>
    <div class="column--content">
      <div>
        <!-- mousedownはクリックする度に発火 -->
        <div class="column--content__list" v-for="item in items" :key="item.no" @mousedown="mouseDown">{{item.name}}</div>
      </div>
    </div>
    <div class="column--create">+ カードを追加する</div>
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
      ],
      element: '',
      draggin: false
    }
  },
  methods: {
    mouseDown() {
      // console.log(event.target)
      // console.log('create event')
      this.draggin = true;
      this.element = event.target;
      this.element.style.position= "absolute"

      // event.target.style.position = "absolute"
    },
    mouseMove() {
      // console.log(event.pageX, event.pageY)
      if(this.draggin) {
        event.target.style.top = `${event.pageX}px`
        event.target.style.left = `${event.pageY}px`
      }
    },
    mouseUp() {
      // console.log('bar')
      this.dragging = false;
    }
  },
  mounted() {
    // mousemoveはマウスを動かす度に発火
    window.addEventListener('mousemove', this.mouseMove);

    // mouseupはクリックを離す度に発火
    window.addEventListener('mouseup', this.mouseUp);
  },
  beforeMounted() {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp)
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
  background-color: #ebecf0;
  border-radius: 5px;
}

.column--title {
  margin-bottom: 20px;
}

.column--create {
  cursor: pointer;
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
