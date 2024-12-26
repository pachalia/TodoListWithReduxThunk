import { TodoService } from '../../services/todo.service.ts';

export const DELETE_TOOO = (id: string) => {
	return (dispatch) => {
		TodoService.deleteTodo(id).then((res) => {
			if (res) {
				dispatch({ type: 'DELETE_TODO', payload: id });
			}
		});
	};
};
