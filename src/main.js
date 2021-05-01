import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq' // https://www.npmjs.com/package/vue-mq
import Product from './data/Product'
import Store from './data/Store.js'

/* Product Registration by prototype
Register a Product instance to the Vue instance by defining it on its prototype
this way the instanciated product Object is available accross components using $this.$product
*/
Vue.prototype.$Product = Product

/* Register Store by prototype */
Vue.prototype.$Store = Store

/* Filters */
// add currency to number in Euro
Vue.filter('toEuro', value => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value))
// turn array of string into concatenated string
Vue.filter('tagsToString', value => value.join(', '))
// fill product availability text
Vue.filter('availability', value => {
  const l = value.length
  if (l === 0) {
    return 'Pas de couleur disponible'
  } else if (l === 1) {
    return `Disponible en ${l} couleur`
  } else {
    return `Disponible en ${l} couleurs`
  }
})
// calculate TTC price from HT
// TVA rate = 20%
Vue.filter('toTTC', (value) => {
  const tax = value * 0.2
  return value + tax
})
// trucate string by ','
// return first split
Vue.filter('truncate', (value) => value.split(',')[0])

/* Responsive */
// define VueMq custom breakpoints
const configVueMq = {
  breakpoints: {
    mobile: 600,
    tablet: 992,
    laptop: 1200,
    desktop: Infinity
  }
}

// Use vue-mq module
Vue.use(VueMq, configVueMq)

Vue.config.productionTip = false

new Vue({
  VueMq,
  render: h => h(App)
}).$mount('#app')
