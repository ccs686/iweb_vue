<template>
  <div id="app" :key="Key">
    <TopNav></TopNav>
    <Header></Header>
    <transition name="slidefade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import TopNav from "./components/TopNav.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { router } from "./route/router";

export default {
  name: "app",
  router,
  components: {
    TopNav,
    Header,
    Footer
  },
  data() {
    return {
      slide: "slidefade",
      show: true,
      Key: "" // 监听URL的变化(解决路由不变,参数变,但页面不刷新的问题)
    };
  },
  watch: {
    $route: function() {
      // 路由(包括参数)发生变化时,对Key进行赋值
      // 如果Key发生了变化,则页面执行刷新
      this.Key = new Date().getTime();
      // this.slide = "slidefade";
    }
  }
};
</script>

<style>
html {
  overflow-y: scroll;
}
.slidefade-enter-active {
  transition: all 1s ease;
}
.slidefade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slidefade-enter, .slidefade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
