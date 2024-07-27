<script setup>
import { RouterLink } from 'vue-router';
import JobListing from '@/components/JobListing.vue';
// import jobData from '@/jobs.json'; // i dati li prendiamo non più dal json statico ma tramite chiamata al json-server nell' onMounted hook
import { ref, defineProps, onMounted, reactive } from 'vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

// const jobs = ref(jobData);
// const jobs = ref([]);

// utilizzo di reactive() al posto di ref(), non utilizza la proprietà .value, non può essere riassegnato il suo valore, accetta solo un oggetto non accetta primitive (l'oggetto può essere manipolato che non vuol dire riassegnare un valore)
const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/jobs');
    // jobs.value = response.data;
    state.jobs = response.data;
  } catch (error) {
    console.log('Error fetching jobs', error.message);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show loading spinner while isLoading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        >
        </JobListing> -->

        <!-- Show jobs when done loading -->
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        ></JobListing>
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
