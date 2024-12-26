import { TodoService } from '../../services/todo.service.ts';
import { IAddFormValue } from '../../components';
import { AppDispatch } from '../store.ts';

export const ADD_TOOO = (todo: IAddFormValue) => {
	return (dispatch: AppDispatch) => {
		TodoService.addTodo(todo).then((res) => {
			if (res) {
				dispatch({ type: 'ADD_TODO', payload: res });
			}
		});
	};
};
