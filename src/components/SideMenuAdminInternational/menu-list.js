import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import paths from '../../constants/paths'

const listLinks = [
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Packs,
    icon: ShoppingCartIcon
  },
  {
    id:3,
    label:'Novo Produto',
    link: paths.NewPacks,
    icon : AddShoppingCartIcon
  }
]

export default listLinks
