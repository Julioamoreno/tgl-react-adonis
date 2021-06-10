import styled from 'styled-components';

export const Elipse = styled.button`
	width: 64px;
	height: 64px;
	background: ${(props) => props.color};
	text-align: center;
	margin-bottom: 10px;
	margin-right: 15px;
	user-select: none;
	border-radius: 50%;
	cursor: pointer;
	border: none;

	p {
		font: normal normal bold 20px arial;
		color: #ffffff;
	}
`;
