const initialState = {
    banners:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'BANNER':
        return { ...state,banners:action.list}

    default:
        return state
    }
}
