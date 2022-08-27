<template>
  <li>
    <spam v-bind:class="{done:todo.completed}">
      <input type="checkbox"
             v-on:change="onCheckBx"
      >
      {{ todo.title }}
    </spam>
    <button
      v-on:click="$emit('remove-item', todo.id)"
    >&times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    /**
     * onCheckBx () {
     *   this.todo.completed = !this.todo.completed
     * }
     */
  }
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
}

.done {
  text-decoration: line-through;
}
</style>
