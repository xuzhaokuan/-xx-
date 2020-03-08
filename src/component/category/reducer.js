const initialState = {
    category:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'CATEGORY':
        return {...state,category:action.list}

    default:
        return state
    }
}
