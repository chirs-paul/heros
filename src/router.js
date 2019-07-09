// 路由模块



import Vue from 'vue';

// 导入vue-router
import VueRouter from 'vue-router';
// 注册VueRouter插件
Vue.use(VueRouter);

// 导入 HeroList 组件
import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'
// 导入 HeroAdd 组件
import HeroAdd from './views/hero/HeroAdd.vue'
// 导入 HeroEidt 组件
import HeroEidt from './views/hero/HeroEidt.vue'

// 创建路由对象
const router = new VueRouter({
   // 选项
  // 当浏览器地址栏中的路由地址 #/hero 和 router-link生成的a标签的href 精确匹配的时候，添加类样式
  // 当浏览器地址栏中的路由地址 #/hero/add 包含router-link生成的a标签的href地址，添加类样式
   linkActiveClass:'active',


  // 配置路由规则
  routes: [
     {path:'/', redirect: {name:'hero'}},
     {name:'hero', path:'/hero',component:HeroList},
     {name:'weapon', path:'/weapon',component:WeaponList},
     {name:'equip', path:'/equip',component:EquipList},
     // 添加英雄的路由
     {name:'heroadd', path:'/hero/add',component:HeroAdd},
      // 编辑英雄的路由
      {name:'heroeidt', path:'/hero/eidt/:id',component:HeroEidt,props:true}
  ]
})

// 导出router对象
export default router;