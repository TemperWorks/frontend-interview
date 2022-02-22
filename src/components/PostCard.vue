<template>
  <Card class="post-card rounded-md">
    <template v-slot:content>
      <p>{{this.postItem.id}}</p>
      <p>{{this.postItem.title}}</p>
    </template>
    <template v-slot:action>
      <div>
        <button class="arrow up" v-if="displayUpButton" @click="clickUp" />
      </div>
      <div>
        <button class="arrow down" v-if="displayDownButton" @click="clickDown" />
      </div>
    </template>
  </Card>
</template>

<script>
import Card from "../core-components/Card";
export default {
  name: "PostCard",
  components: {
    Card
  },
  emits: ["clicked-up", "clicked-down"],
  props: {
    postItem: Object,
    index: Number,
    length: Number
  },
  computed: {
    //Display up button logic for first element
    displayUpButton: function() {
      return this.index > 0 ? true : false;
    },
    //Display down button logic for last element
    displayDownButton: function() {
      return this.index !== this.length - 1 ? true : false;
    }
  },
  methods: {
    //Emits custom event and related element information to parents component
    clickUp() {
      this.$emit("clicked-up", this.postItem.id, this.index, "up");
    },
    clickDown() {
      this.$emit("clicked-down", this.postItem.id, this.index, "down");
    }
  }
};
</script>

<style scoped>
.post-card {
  min-height: 100px;
  margin: 15px;
}
.content {
  flex-grow: 1;
}
.arrow {
  border: solid purple;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 5px;
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>