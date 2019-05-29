export const ADD_TODO = 'ADD_TODO';

export const addTodo = userInput => {
    return {
        type: ADD_TODO,
        payload: userInput
    }
}