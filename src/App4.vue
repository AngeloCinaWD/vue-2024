<!-- COMPOSITION API SHORTER VERSION, non c'è la funzione setup() che wrappa, non c'è l'export default, non c'è il return. Il tag <script> ha l'attributo setup-->
<script setup>
import { ref, onMounted } from 'vue';

    const name = ref('John Doe');
    const status = ref(true);
    const  tasks = ref(['task one', 'task two', 'task three']);
    const newTask = ref('');

    const changeUserStatus = () => {
      status.value = !status.value
    };

    const addTask = () => {
      if(newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    };

    const deleteTask = (index) => {
        tasks.value.splice(index, 1);
    };

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map(task => task.title);
      } catch (error) {
        console.log('Error fetching tasks');
      }
    });
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
    <li v-for="(task, index) in tasks" :key="index">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <br>
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task:  </label>
    <input type="text" name="addTask" id="addTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>