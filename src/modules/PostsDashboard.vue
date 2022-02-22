<template>
  <div class="dashboard">
    <PostsList :posts="posts" @order-changed="changeOrder" />
    <ActionsList :posts-order-actions="postsOrderActions" @item-popped="timeTravel" />
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import ActionsList from "../components/ActionsList";
import { getPosts } from "../services/PostServices";
import { swapArrayElements } from "../utils/Utils";

export default {
  name: "PostsDashboard",
  components: {
    PostsList,
    ActionsList
  },
  data: function() {
    return {
      posts: [],
      postsOrderActions: [],
      stackIndexCount: 0
    };
  },
  created: function() {
    getPosts(1, 2, 3, 4, 5)
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    changeOrder(firstIndex, secondIndex) {
      this.postsOrderActions.push({
        stackId: this.stackIndexCount,
        element: this.posts[firstIndex],
        initialIndex: firstIndex,
        swappedIndex: secondIndex
      });
      this.stackIndexCount++;
      swapArrayElements(this.posts, firstIndex, secondIndex);
    },
    timeTravel(id) {
      for (let i = this.postsOrderActions.length - 1; i >= id; i--) {
        const action = this.postsOrderActions[i];
        console.log("swapped index ", action.swappedIndex, "initial index ", action.initialIndex);
      }
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding-top: 30px;
}
</style>