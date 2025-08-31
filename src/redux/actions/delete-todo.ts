import { TodoService } from '../../services/todo.service.ts';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

interface DeleteTodoAction {
	type: 'DELETE_TODO';
	payload: string;
}

type TodoActionTypes = DeleteTodoAction;

export const DELETE_TOOO = (
	id: string,
): ThunkAction<void, RootState, unknown, TodoActionTypes> => {
	return (dispatch) => {
		TodoService.deleteTodo(id).then((res) => {
			if (res) {
				dispatch({ type: 'DELETE_TODO', payload: id });
			}
		});
	};
};
