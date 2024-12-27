import { useEffect } from 'react';
import { ITodo } from '../interfaces/interfaces.ts';
import { IAddFormValue } from '../components';
import { GET_TOOO } from '../redux/actions/get-todo.ts';
import { DELETE_TOOO } from '../redux/actions/delete-todo.ts';
import { ADD_TOOO } from '../redux/actions/add-todo.ts';
import { UPDATE_TOOO_STATUS } from '../redux/actions/update-todo-status.ts';
import { UPDATE_TOOO_DESCRIPTION } from '../redux/actions/update-todo-description.ts';
import { useAppDispatch, useAppSelector } from './hooks.ts';

export const useTodos = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state) => state.todoLists);
	useEffect(() => {
		dispatch(GET_TOOO());
	}, []);

	const handleDelete = (id: string) => {
		dispatch(DELETE_TOOO(id));
	};

	const updateTodo = (params: Partial<ITodo>) => {
		if (!params.id) return;
		if (params.description) {
			dispatch(UPDATE_TOOO_DESCRIPTION(params.id, params.description));
		}

		if (params.status || params.status === false) {
			dispatch(UPDATE_TOOO_STATUS(params.id));
		}
	};

	const handleAdd = (data: IAddFormValue) => {
		dispatch(ADD_TOOO(data));
	};
	return {
		todos,
		handleDelete,
		handleAdd,
		updateTodo,
	};
};
