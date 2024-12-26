import { AddTodoForm, FindForm, FindFormValue, Todos } from './components';
import { useTodos } from './hooks/use-todos.ts';

import { FIND_TOOOS } from './redux/actions/find-todo.ts';
import { useAppDispatch, useAppSelector } from './hooks/hooks.ts';

export const App: React.FC = () => {
	const { handleDelete, updateTodo, handleAdd, todos } = useTodos();

	const dispatch = useAppDispatch();

	const { findTodos } = useAppSelector((state) => state);

	const handleFindTodo = (data: FindFormValue) => {
		dispatch(FIND_TOOOS(data.todo));
	};

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Todo List</h1>
			<h3 style={{ textAlign: 'center' }}>
				Чтобы изменить статус todo кликните на заголовке todo
			</h3>
			<FindForm onSubmit={handleFindTodo} />
			<Todos
				handleDelete={handleDelete}
				handleUpdate={updateTodo}
				todos={findTodos ? findTodos : todos}
			/>
			{!findTodos && <AddTodoForm onSubmit={handleAdd} />}
		</>
	);
};
