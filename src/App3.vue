<!-- COMPOSITION API LONGER VERSION-->
<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('John Doe');
    const status = ref(true);
    const  tasks = ref(['task one', 'task two', 'task three']);

    const changeUserStatus = () => {
      status.value = !status.value
    };

    return {name, status, tasks, changeUserStatus}
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
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>