import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from "vuefire";
import "./assets/styles.css";

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
