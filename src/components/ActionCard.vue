<template>
  <Card class="action-card">
    <template class="w-4/6" v-slot:content>
      <p>{{actionInformationMessage}}</p>
    </template>
    <template class="w-2/6" v-slot:action>
      <button class="time-travel-button" @click="timeTravel">Time Travel</button>
    </template>
  </Card>
</template>

<script>
import Card from "../core-components/Card";

export default {
  name: "ActionCard",
  components: {
    Card
  },
  props: {
    action: {
      type: Object
    }
  },
  computed: {
    //Returns display message on action card
    actionInformationMessage: function() {
      return `Moved post ${this.action.element.id} from index ${this.action.initialIndex} to index ${this.action.swappedIndex}`;
    }
  },
  methods: {
    //Emits id of related committed action to parent component
    timeTravel: function() {
      this.$emit("time-travel", this.action.stackId);
    }
  }
};
</script>

<style scoped>
.action-card {
  height: 60px;
  border: 1px gray solid;
}
.time-travel-button {
  background: aquamarine;
  color: purple;
  padding: 8px;
  border-radius: 4px;
}
</style>