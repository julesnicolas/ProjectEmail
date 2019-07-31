import Vue from 'vue'
import Router from 'vue-router'
import ContentCode from '@/components/ContentCode'
import ChampsInfo from '@/components/ChampsInfo'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: ContentCode,
        Header: Header,
        ChampsInfo: ChampsInfo
      } 
    }
   
  ]
})
