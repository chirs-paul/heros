import VueRouter from 'vue-router';

import Vue from 'vue';
Vue.use(VueRouter);

import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'

const router = new VueRouter({
   linkActiveClass:'active',
  routes: [
     {path:'/', redirect: {name:'hero'}},
     {name:'hero', path:'/hero',component:HeroList},
     {name:'weapon', path:'/weapon',component:WeaponList},
     {name:'equip', path:'/equip',component:EquipList}
  ]
})
export default router;