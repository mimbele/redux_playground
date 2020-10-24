//Action Names:
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const ADD_RESULT = 'ADD_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

//Action Creators
export const increment = () => ({type: 'INCREMENT'})
export const decrement = () => ({type: 'DECREMENT'})
export const add = (amount) => ({type: 'ADD', amount: amount})
export const subtract = (amount) => ({type: 'SUBTRACT', amount: amount})
export const addResult = (number) => ({type: 'ADD_RESULT', number: number})
export const deleteResult = (id) => ({type: 'DELETE_RESULT', id: id})

//Asyncronous thunks
export const addResultAsync = (number) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(addResult(number))
        },1000)
    }
}
