import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import titleMixin from './mixins/titleMixin'
Vue.mixin(titleMixin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
