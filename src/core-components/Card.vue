<template>
  <div class="card w-96 shadow-lg">
    <div class="w-4/6">
      <slot name="content"></slot>
    </div>
    <div class="w-2/6 action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.card {
  display: flex;
  background-color: white;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  text-align: left;
}
.action {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>