import {
  Form,
  Field,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Grid,
  Toast,
  GridItem,
  Swipe,
  SwipeItem,
  Search,
  Cell,
  CellGroup,
  Icon,
  IndexBar,
  IndexAnchor,
  Image as VanImage
} from 'vant'
const components = [
  Form,
  Field,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Grid,
  Toast,
  GridItem,
  Swipe,
  SwipeItem,
  Search,
  Cell,
  CellGroup,
  Icon,
  IndexBar,
  IndexAnchor,
  VanImage
]
const registerVant = (Vue) => {
  components.forEach((component) => Vue.use(component))
}
export default registerVant
