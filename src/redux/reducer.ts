import { ITodo } from '../interfaces/interfaces.ts';

export interface IState {
	todoLists: ITodo[];
	findTodos: ITodo[] | null;
}

export const initialState: IState = { todoLists: [], findTodos: null };

export const reducer = (state: IState = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todoLists: [action.payload, ...state.todoLists],
			};
		case 'GET_TODO':
			return {
				...state,
				todoLists: action.payload,
			};
		case 'DELETE_TODO':
			return {
				...state,
				todoLists: state.todoLists.filter((val) => val.id !== action.payload),
			};
		case 'UPDATE_TODO_STATUS': {
			const arr = state.todoLists;
			const newTodo = action.payload as ITodo;
			const index = arr.findIndex((val) => val.id === newTodo.id);
			arr[index] = newTodo;
			return {
				...state,
				todoLists: arr,
			};
		}
		case 'UPDATE_TODO_DESCRIPTION': {
			const arr = state.todoLists;
			const newTodo = action.payload as ITodo;
			const index = arr.findIndex((val) => val.id === newTodo.id);
			arr[index] = newTodo;
			return {
				...state,
				todoLists: arr,
			};
		}
		case 'FIND_TODOS':
			return {
				...state,
				findTodos: action.payload,
			};
		default:
			return state;
	}
};
