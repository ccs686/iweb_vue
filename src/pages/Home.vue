<template>
  <b-container fluid class="px-0">
    <Carousel></Carousel>
    <HomeCourse></HomeCourse>
    <HomeCourse></HomeCourse>
  </b-container>
</template>
<script>
import Carousel from "../components/Carousel";
import HomeCourse from "../components/HomeCourse";
export default {
  name: "home",
  components: {
    Carousel,
    HomeCourse
  }
};
</script>
<style>
</style>