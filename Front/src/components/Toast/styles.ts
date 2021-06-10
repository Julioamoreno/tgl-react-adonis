import styled from 'styled-components';

export const ToastGrid = styled.div`
	display: flex;
	width: inherit;
	padding-top: 10px;
	box-sizing: border-box;
	position: fixed;
	flex-direction: column;
	align-items: flex-start;
	border: 1px black dotted;
	padding: 15px;
	margin: 10px;
	background-color: ${(props) => (props.color === 'erro' ? 'red' : null)};
	background-color: ${(props) => (props.color === 'sucesso' ? 'green' : null)};
	background-color: ${(props) => (props.color === 'aviso' ? 'yellow' : null)};
	color: ${(props) => (props.color === 'sucesso' ? 'white' : null)};
	z-index: 999;

	top: 12px;
	right: 12px;
	transition: transform 0.6s ease-in-out;
	animation: toast-in-right 0.7s;
`;
export const Title = styled.div`
	display: flex;
	width: inherit;
	padding-top: 10px;
	text-transform: uppercase;
`;
export const Text = styled.div`
	display: flex;
	width: inherit;
	padding-top: 10px;
`;
