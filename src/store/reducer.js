const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        
        case 'ADD':
            return { ...state, counter: state.counter + action.amount }

        case 'SUBTRACT': 
            return { ...state, counter: state.counter - action.amount }

        case 'ADD_RESULT':
            return { 
                ...state, 
                results: state.results.concat({data: state.counter, id: new Date()})
            }

        case 'DELETE_RESULT':
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