import Vue from 'vue';
import VueBurgerMenu from 'vue-burger-menu';

if (!process.server) {
  Vue.use(VueBurgerMenu);
} else {
  Vue.use({});
}
