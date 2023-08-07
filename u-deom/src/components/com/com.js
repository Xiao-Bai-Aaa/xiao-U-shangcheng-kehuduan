import com from './com.vue'



function total(a, b) {
    let num = 0
    for (let i = a; i <= b; i++) {
        num += i
    }
    return num
}


export default {
    install(Vue) {
        Vue.component('com', com)
        Vue.prototype.$total = total
        Vue.directive('sss', {
            inserted(el, binding) {
                // if (binding.value != 'aaaa') {
                //     el.remove()
                // }
                el.style.color = binding.value
            },
            update(el, binding) {
                console.log(el, binding);
                el.style.color = binding.value
            }
        })
    },
}

