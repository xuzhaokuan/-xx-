const initialState = {
    homeCategory:[],
    miaoshaList:[],
    fourList:[]

}

export default (state = initialState,action) => {
    
    switch (action.type) {

    case 'HOMECATEGORY':
        let newState ={...state}
        newState.homeCategory=action.list
      
        return newState
    case 'MIAOSHA':
            let newState1 ={...state}
            newState1.miaoshaList=action.list2
           
            return newState1
    case 'MIAOSHA':
            let newState2 ={...state}
            newState2.fourList=action.list3
            console.log(newState1)
            return newState2
    default:
        return state
    }
}
