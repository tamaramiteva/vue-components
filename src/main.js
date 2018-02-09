import Vue from 'vue'
import {Row, Col, Button, Card, Badge, Table, TableColumn, Popover} from 'element-ui'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$eventBUS = new Vue(); // Global event bus

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(Card.name, Card)
Vue.component(Badge.name, Badge)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Popover.name, Popover)

new Vue({
  render: h => h(App)
}).$mount('#app')
