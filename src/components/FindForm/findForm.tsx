import { SubmitHandler, useController, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export type FindFormValue = {
	todo: string;
};
interface IAddFormProps {
	onSubmit: SubmitHandler<FindFormValue>;
}

export const FindForm: React.FC<IAddFormProps> = ({ onSubmit }) => {
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm<FindFormValue>({ mode: 'onChange' });

	const dispatch = useDispatch();

	const { field } = useController({
		name: 'todo',
		control,
		defaultValue: '',
		rules: {
			required: 'Поле обязательно',
		},
	});

	useEffect(() => {
		if (!isValid) {
			dispatch({ type: 'FIND_TODOS', payload: null });
		}
	}, [isValid]);
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				<input {...field} type="text" />
				<button type={'submit'} disabled={!isValid}>
					Искать
				</button>
			</form>
		</>
	);
};
