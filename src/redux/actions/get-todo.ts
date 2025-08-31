import { TodoService } from '../../services/todo.service.ts';
import { RootState } from '../store'; // тип состояния всего стора
import { ThunkAction } from 'redux-thunk';
import { ITodo } from '../../interfaces/interfaces.ts'; // тип Todo

interface GetTodoAction {
	type: 'GET_TODO';
	payload: ITodo[];
}

type TodoActionTypes = GetTodoAction;

export const GET_TOOO = (): ThunkAction<
	Promise<void>,
	RootState,
	unknown,
	TodoActionTypes
> => {
	return async (dispatch) => {
		const todos = await TodoService.getTodos();
		dispatch({ type: 'GET_TODO', payload: todos });
	};
};
