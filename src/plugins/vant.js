import {
  Form,
  Field,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem
} from 'vant'
const components = [
  Form,
  Field,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem
]
const registerVant = (Vue) => {
  components.forEach((component) => Vue.use(component))
}
export default registerVant
