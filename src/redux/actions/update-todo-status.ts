import { TodoService } from '../../services/todo.service.ts';
import { AppDispatch } from '../store.ts';

export const UPDATE_TOOO_STATUS = (id: string) => {
	return (dispatch: AppDispatch) => {
		TodoService.updateStatus(id).then((res) => {
			if (res) {
				dispatch({ type: 'UPDATE_TODO_STATUS', payload: res });
			}
		});
	};
};
