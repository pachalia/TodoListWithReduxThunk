import { ITodo } from '../interfaces/interfaces.ts';

export interface IState {
	todoLists: ITodo[];
	findTodos: ITodo[] | null;
}

export const initialState: IState = { todoLists: [], findTodos: null };

interface AddTodoAction {
	type: 'ADD_TODO';
	payload: ITodo;
}

interface GetTodoAction {
	type: 'GET_TODO';
	payload: ITodo[];
}

interface DeleteTodoAction {
	type: 'DELETE_TODO';
	payload: string; // id удаляемого todo
}

interface UpdateTodoStatusAction {
	type: 'UPDATE_TODO_STATUS';
	payload: ITodo;
}

interface UpdateTodoDescriptionAction {
	type: 'UPDATE_TODO_DESCRIPTION';
	payload: ITodo;
}

interface FindTodosAction {
	type: 'FIND_TODOS';
	payload: ITodo[] | null;
}

// Union тип для всех возможных действий
export type TodoActionTypes =
	| AddTodoAction
	| GetTodoAction
	| DeleteTodoAction
	| UpdateTodoStatusAction
	| UpdateTodoDescriptionAction
	| FindTodosAction;

export const reducer = (
	state: IState = initialState,
	action: TodoActionTypes,
): IState => {
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
