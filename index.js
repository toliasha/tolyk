/* BLOCKS */
import Header from './blocks/header.vue';
Vue.component('t-header', Header);
import Footer from './blocks/footer.vue';
Vue.component('t-footer', Footer);
import SVG from './blocks/svg.vue';
Vue.component('t-svg', SVG);

import Vue from 'vue';
import App from './App.vue';

const K = new Vue(App);

let a = {pidaras: 1};
let pidaras = {...a};
