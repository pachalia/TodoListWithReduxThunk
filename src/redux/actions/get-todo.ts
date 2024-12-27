import { TodoService } from '../../services/todo.service.ts';

export const GET_TOOO = () => {
	return (dispatch) => {
		TodoService.getTodos().then((res) => {
			dispatch({ type: 'GET_TODO', payload: res });
		});
	};
};
