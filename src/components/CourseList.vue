<!-- CourseList.vue -->
<template>
  <div>
    <h2>All Courses</h2>
    <!-- Display a list of all available courses -->
    <router-link v-for="course in courses" :key="course.id" :to="'/courses/' + course.id">{{ course.title }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseslist: [] // Fetch courses data from backend API
    }
  }
}
</script>
