<template>
  <div id="app">
    <!-- <AppHeader></AppHeader> -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- <AppSilder></AppSilder> -->
        <app-silder></app-silder>

        <!-- <AppList></AppList> -->
        <!-- <app-list></app-list> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// ES6中的模块化的语法，导入模块
// import HelloWorld from './components/HelloWorld.vue'

//1.导入组件
// import HeroList from "./components/HeroList.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSilder from "./components/AppSilder.vue";
// import AppList from "./components/AppList.vue";

// export default {
//   name: "app",
//   //2.注册局部组件
//   components: {
//     HeroList
//   }
// };
export default {
  name: "app",
  //2.注册局部组件
  components: {
    AppHeader,
    AppSilder
    // AppList
  }
};
</script>

<style>
</style>
