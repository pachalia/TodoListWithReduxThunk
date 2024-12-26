import { TodoService } from '../../services/todo.service.ts';
import { AppDispatch } from '../store.ts';

export const FIND_TOOOS = (todo: string) => {
	return (dispatch: AppDispatch) => {
		TodoService.findTodo(todo).then((res) => {
			if (res) {
				dispatch({ type: 'FIND_TODOS', payload: res });
			}
		});
	};
};
