<template>
  <b-container>
    <b-row class="mt-5" v-for="item in teacherList" :key="item.tid">
      <b-col lg="2" md="4" sm="12">
        <img :src="require(`../assets/images/${item.tpic}`)" alt class="img-fluid" />
      </b-col>
      <b-col lg="10" md="8" sm="12">
        <h3>{{item.tname}}{{item.maincourse}}</h3>
        <h4>工作经历：</h4>
        <span>{{item.experience}}</span>
        <h4>授课风格：</h4>
        <span>{{item.style}}</span>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      teacherList: []
    };
  },
  methods: {
    getTeachers() {
      this.$axios({ methods: "get", url: "/teacher/list" })
        .then(res => {
          this.teacherList = res.data.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getTeachers();
  }
};
</script>
<style>
</style>