import styled from 'styled-components';

export const GameButtonListGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const GameType = styled.button`
	width: 113px;
	height: 34px;
	background: #ffffff 0% 0% no-repeat padding-box;
	background-color: ${(props) => (props.defaultChecked ? null : props.color)};
	color: ${(props) => (props.defaultChecked ? props.color : 'white')};
	font: italic normal bold 14px arial;
	border: 2px solid;
	border-radius: 100px;
	opacity: 1;
	text-align: center;
	margin-bottom: 10px;
	:nth-child(n + 1) {
		margin-right: 12px;
	}
	*:first-child() {
		margin-left: 5px;
	}
	:hover {
		cursor: pointer;
		outline: none;
	}
`;
