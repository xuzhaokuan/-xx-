import { message} from 'antd';
const initialState = {
    cartList:[],
    likeList:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'ADDCART':
        if(sessionStorage.getItem('name')){
           
            //1.如果购物车为空，直接加入

            //3.购物车不为空，但没有添加过的商品，直接加入

            //2.购物车不为空，且有加入过的商品，同商品数量+1
            let newState = JSON.parse(JSON.stringify(state))
            if(newState.cartList.length===0){
                newState.cartList.push(action.p)
            }else {
                let idx=newState.cartList.findIndex((item)=>item.id===action.p.id)
               
                if(idx!==-1){
                    newState.cartList[idx].count++;
                }else{
                    newState.cartList.push(action.p)
                }
            }
            message.success('加入入购物车成功')
            return newState
        }
        else{
            message.warning('请先登录')
            return state
        }
        
        //商品数量+1
    case 'INC':
        let newState1=JSON.parse(JSON.stringify(state))
        
        let idx1=newState1.cartList.findIndex((item)=>item.id===action.p.id)
        newState1.cartList[idx1].count++;
        
        return newState1
        //商品数量-1
    case 'DEC':
        let newState2=JSON.parse(JSON.stringify(state))
        let idx2=newState2.cartList.findIndex((item)=>item.id===action.p.id)
        if(newState2.cartList[idx2].count>1){
            newState2.cartList[idx2].count--;
        }
        
        return newState2
    
    //单选
    case 'CHECKED':
        let newState3=JSON.parse(JSON.stringify(state))
        let idx3=newState3.cartList.findIndex((item)=>item.id===action.p.id)
        newState3.cartList[idx3].flag=!newState3.cartList[idx3].flag
        return newState3
        //全选
    case 'ALLCHECK':
        let newState4 = JSON.parse(JSON.stringify(state))
        newState4.cartList.forEach((item)=>{
            item.flag=action.all.checked
        })
        
        return newState4
        //删除选中的商品
    case 'DELETE':
        let newState5=JSON.parse(JSON.stringify(state))
        newState5.cartList.forEach((item,index)=>{
            if(item.flag===true){
                newState5.cartList.splice(index,1)
             
            }
        })
     
        return newState5
    default:
        return state
    }
}
