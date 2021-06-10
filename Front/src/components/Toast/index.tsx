import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { gamePlayedAction } from '../../store';

import { ToastGrid, Title, Text } from './styles';

const Toast: React.FC<{
	type: string;
	message: string;
}> = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(gamePlayedAction.clearError());
		}, 2500);
		return () => {
			clearInterval(interval);
		};
	}, [dispatch]);

	return (
		<>
			{ReactDOM.createPortal(
				<ToastGrid color={props.type}>
					<Title>{props.type}</Title>
					<Text>{props.message}</Text>
				</ToastGrid>,
				document.getElementById('modal-root')!
			)}
		</>
	);
};

export default Toast;
