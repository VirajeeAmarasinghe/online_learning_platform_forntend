<!-- StudentEnrollment.vue -->
<template>
  <div>
    <h2>Enrollment Form</h2>
    <form @submit.prevent="submitEnrollment">
      <div>
        <label for="course">Course:</label>
        <select v-model="selectedCourse" id="course">
          <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.name }}</option>
        </select>
      </div>
      <div>
        <label for="student">Student:</label>
        <select v-model="selectedStudent" id="student">
          <option v-for="student in students" :key="student.id" :value="student.id">{{ student.name }}</option>
        </select>
      </div>
      <button type="submit">Enroll</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: null,
      selectedStudent: null,
      courses: [],
      students: []
    };
  },
  mounted() {
    // Fetch courses and students data from API
    this.fetchCourses();
    this.fetchStudents();
  },
  methods: {
    fetchCourses() {
      // Make API request to fetch courses data
      // Example: axios.get('/api/courses')
      // Upon successful response, set this.courses to received data
    },
    fetchStudents() {
      // Make API request to fetch students data
      // Example: axios.get('/api/students')
      // Upon successful response, set this.students to received data
    },
    submitEnrollment() {
      // Make API request to enroll student in selected course
      // Example: axios.post('/api/enrollments', { course_id: this.selectedCourse, student_id: this.selectedStudent })
      // Upon successful response, display success message or redirect
    }
  }
};
</script>

<style>
/* Component-specific styles */
h2 {
  color: green;
}
</style>
