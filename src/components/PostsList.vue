<template>
  <div class="posts-list">
    <h1 class="text-3xl font-bold posts-list-header">Sortable Post List</h1>
    <transition-group name="posts-list" tag="span">
      <PostCard
        :key="post.id"
        v-for="(post, index) in this.posts"
        :post-item="post"
        :index="index"
        :length="this.posts.length"
        @clicked-up="reOrder"
        @clicked-down="reOrder"
      />
    </transition-group>
  </div>
</template>

<script>
import PostCard from "./PostCard";

export default {
  name: "PostsList",
  components: {
    PostCard
  },
  props: {
    posts: {
      type: Array
    }
  },
  methods: {
    //Emits order change event according to action and affected ids
    reOrder(id, index, action) {
      if (action === "down") {
        this.$emit("order-changed", index, index + 1);
      } else if (action === "up") {
        this.$emit("order-changed", index, index - 1);
      }
    }
  }
};
</script>

<style scoped>
.posts-list {
  max-width: 600px;
}
.posts-list-header {
  padding-left: 15px;
}
.posts-list-move {
  transition: transform 0.6s;
}
</style>