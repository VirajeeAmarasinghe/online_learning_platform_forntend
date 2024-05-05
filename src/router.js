// router.js
//import Vue from 'vue';
// router.js
import { createRouter, createWebHistory } from 'vue-router';
import CourseList from './components/CourseList.vue';
import StudentEnrollment from './components/StudentEnrollment';


const routes = [
  { path: '/courses', component: CourseList },
  { path: '/enrolls', component: StudentEnrollment}  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

