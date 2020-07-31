import VueRecyclist from './components/VueRecyclist'

export default VueRecyclist

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-recyclist', VueRecyclist)
}
