import {combineReducers} from 'redux'
import banner from '../component/banner/reducer'
import homeReducer from '../component/home/reducer'
import categoryReducer from '../component/category/reducer'
import cartReducer from '../component/cart/reducer'
let reducer = combineReducers({
   bannerReducer:banner,
   homeReducer,
   categoryReducer,
   cartReducer
})

export default reducer
