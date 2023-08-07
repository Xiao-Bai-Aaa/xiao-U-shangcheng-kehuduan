import navComp from './nav.vue'
import tabComp from './tabBar.vue'
import Vue from 'vue'

const autoComp = {
    navComp,
    tabComp
}

for (let key in autoComp) {
    Vue.component(key, autoComp[key])
}

export default autoComp