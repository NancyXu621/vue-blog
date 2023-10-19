import login from '../views/login/login.vue'
import echat from '../views/echat/echat.vue'
const routes = [
  { path: '/', redirect: login },
  { path:'/echat', redirect: echat },
]
export default routes