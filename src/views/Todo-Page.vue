<template>
  <div class="main">
    <h1>To do</h1>
    <div class="main-input">
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not completed">Not completed</option>
      </select>
      <AddItem
        @addNewItem="addItem"
      />
    </div>
    <BlankList
      v-bind:todos="filteredTodos"
      v-if="filteredTodos.length"
      @onCheckBx="onCheckBx"
      @remove-item="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import BlankList from '@/components/blank-list'
import AddItem from '@/components/addItem'

export default {
  name: 'todos-page',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BlankList,
    AddItem
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(json => {
        this.todos = json
      })
  },
  watch: {
    filter (value) {
      console.log(value)
    }
  },
  computed: {
    filteredTodos () {
      let filter
      if (this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(i => i.completed)
      }
      if (this.filter === 'not completed') {
        return this.todos.filter(i => !i.completed)
      }
      return filter
    }
  },
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter(i => i.id !== id)
    },
    addItem (todo) {
      this.todos.push(todo)
      console.log(todo)
    }
  },
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  }
}
</script>

<style scoped>
.main {
  text-align: center;
}
.main-input{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
