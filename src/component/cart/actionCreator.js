export default {
    addCart(p){
        return {
            type:'ADDCART',
            p
        }
    },
    increace(p){
        return {
            type:'INC',
            p
        }
    },
    decreace(p){
        return {
            type:'DEC',
            p
        }
    },
    checkedOne(p){
        return{
            type:'CHECKED',
            p
        }
    },
    allCheck(all){
        return {
            type:'ALLCHECK',
            all
        }
    },
    delete(){
        return {
            type:'DELETE',
        }
    },
    categoryAction(list){
        return {
            type:'CATEGORY',
            list
        }
    }
}