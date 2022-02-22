<template>
  <div class="wrapper rounded-md shadow-lg">
    <div class="header">
      <p>List of actions committed</p>
    </div>
    <div class="actions-list">
      <transition-group name="actions-list" tag="span" appear>
        <ActionCard
          :key="action.stackId"
          v-for="action in this.postsOrderActions.slice().reverse()"
          :action="action"
          @time-travel="timeTravel"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import ActionCard from "./ActionCard";

export default {
  name: "ActionsList",
  components: {
    ActionCard
  },
  props: {
    postsOrderActions: {
      type: Array
    }
  },
  methods: {
    //Passes emitted time travel event to parent (PostsDashboard component)
    timeTravel: function(id) {
      this.$emit("item-popped", id);
    }
  }
};
</script>

<style scoped>
.wrapper {
  min-width: 450px;
}
.header {
  background-color: white;
  font-weight: 700;
  font-size: 24px;
  padding: 8px 28px;
}
.actions-list {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  max-height: 600px;
  overflow: auto;
  padding: 16px;
}

/* List transitions */
.actions-list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.actions-list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.actions-list-enter-active {
  transition: all 0.4s ease;
}
.actions-list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.actions-list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.actions-list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.actions-list-move {
  transition: all 0.4s ease;
}
</style>