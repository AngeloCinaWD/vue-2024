<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: true,
      tasks: ['task one', 'task two', 'task three'],
      link: 'https://www.google.com'
    }
  },
  methods: {
    changeUserStatus() {
      this.status = !this.status
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <p v-else>User is inactive</p>

  <!-- <button v-on:click="changeUserStatus">Change User Status</button> -->
  <!-- shorthand del v-on:event è @event -->
  <button @click="changeUserStatus">Change User Status</button>
  <br>
  <h3>Tasks:</h3>
  <br>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <br>
  <!-- <a v-bind:href="link" target="_blank" rel="noopener noreferrer">Click to google</a> -->
   <!-- shorthand del v-bind:attribute è :attribute -->
  <a :href="link" target="_blank" rel="noopener noreferrer">Click to google</a>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>