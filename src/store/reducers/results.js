import * as actions from '../actions/actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_RESULT:
            return { 
                ...state, 
                results: state.results.concat({data: action.number, id: new Date()})
            }

        case actions.DELETE_RESULT:
            const newArray = state.results.filter( item => (item.id !== action.id))
            return { 
                ...state, 
                results: newArray
            }

        default:
            return state
        }
    }


export default reducer