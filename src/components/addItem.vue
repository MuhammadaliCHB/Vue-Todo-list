<template>
  <form class="formSave"
        @submit.prevent="onSubmit">
    <input type="text"
           v-model="title"
    >
    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.title.trim()) {
        const Item = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('addNewItem', Item)
      }
    }
  }
}
</script>

<style scoped>
.formSave {
  margin-bottom: 10px;
}
</style>
