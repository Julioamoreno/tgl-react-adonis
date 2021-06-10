import styled from 'styled-components';

export const CardTitle = styled.h2`
	font: italic normal bold 35px/70px arial;
	color: #707070;
	margin: 0;
`;

export const Card = styled.div`
	width: 352px;
	height: ${(props) => (props.theme === 'small' ? '194px' : '337px')};
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 2px 15px 12px #00000014;
	border: 1px solid #dddddd;
	border-radius: 15px;
`;

export const Input = styled.input`
	font: italic normal bold 17px/70px arial;
	letter-spacing: 0px;
	padding-left: 20px;
	width: 330px;
	border: 0;
	border-bottom: 1px #dedede solid;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	::placeholder {
		color: #9d9d9d;
	}
`;

export const BtnLogin = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: stretch;
	height: 200px;

	button {
		display: flex;
		text-align: center;
		font: italic normal bold 35px/70px arial;
		color: #b5c401;
		border: 0;
		background-color: #fff;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		padding-bottom: 15px;
		border-bottom: 2px #dedede solid;
		border-bottom-left-radius: 25px;
		border-bottom-right-radius: 25px;
	}
`;
export const BtnSignUp = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	font: italic normal bold 35px/70px arial;
	color: #707070;
	border: 0;
	background-color: transparent;
	cursor: pointer;
	margin-top: 10px;
`;

export const Col4 = styled.div`
	width: 33%;
	display: flex;
	align-content: center;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	margin-top: 115px;
	@media (max-width: 840px) {
		width: 99%;
	}
`;
