import * as actions from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return { ...state, counter: state.counter + 1 }
        
        case actions.DECREMENT:
            return { ...state, counter: state.counter - 1 }
        
        case actions.ADD:
            return { ...state, counter: state.counter + action.amount }

        case actions.SUBTRACT: 
            return { ...state, counter: state.counter - action.amount }

        case actions.ADD_RESULT:
            return { 
                ...state, 
                results: state.results.concat({data: state.counter, id: new Date()})
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