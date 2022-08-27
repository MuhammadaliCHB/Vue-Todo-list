<template>
  <div>
    <ul>
      <ListItem
        v-for="i of todos"
        :key="i"
        v-bind:todo="i"
        v-on:remove-item="removeItem"
      />
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/list-item'

export default {
  name: 'blank-list',
  props: ['todos'],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ListItem
  },
  methods: {
    removeItem (id) {
      this.$emit('remove-item', id)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
