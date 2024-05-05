<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Welcome to our Online Learning Platform!</h1>
      <p>Start your learning journey today.</p>
    </header>
    <main>
      <section>
        <router-link to="/courses">Courses</router-link>
      </section>      
      <section>
        <router-link to="/enrolls">Enroll Student</router-link>        
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Online Learning Platform</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add your CSS styles for the landing page here */
</style>
