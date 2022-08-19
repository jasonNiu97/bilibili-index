import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Tab, Tabs, Swipe, SwipeItem, Form, Field, CellGroup, NavBar } from 'vant'

import '@/mock/index'
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
import 'vant/es/tabs/style'
import 'vant/es/tab/style'
import 'vant/es/form/style'
import 'vant/es/field/style'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Button)
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(NavBar)
app.use(router).mount('#app')
