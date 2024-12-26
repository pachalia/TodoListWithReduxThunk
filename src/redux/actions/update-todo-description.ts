import { TodoService } from '../../services/todo.service.ts';
import { AppDispatch } from '../store.ts';

export const UPDATE_TOOO_DESCRIPTION = (id: string, description: string) => {
	return (dispatch: AppDispatch) => {
		TodoService.updateTodoDescription(id, description).then((res) => {
			if (res) {
				dispatch({ type: 'UPDATE_TODO_DESCRIPTION', payload: res });
			}
		});
	};
};
