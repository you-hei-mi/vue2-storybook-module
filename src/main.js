import Vue from 'vue'
import App from './App.vue'
import MyStorybookUi from 'my-storybook-ui'
import 'my-storybook-ui/my-storybook-ui.css'
Vue.use(MyStorybookUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
