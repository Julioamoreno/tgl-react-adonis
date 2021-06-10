import styled from 'styled-components';

export const CartGrid = styled.div`
	border: 1px solid #e2e2e2;
	border-radius: 10px 10px 0 0;
	background: #ffffff 0% 0% no-repeat padding-box;
	padding-top: 30px;
	padding-left: 13px;
	min-height: 200px;
	max-height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: 1180px) {
		padding-left: 10px;
	}
`;
export const CartTitle = styled.div`
	font: italic normal bold 24px arial;
	color: #707070;
	text-transform: uppercase;
`;

export const CartGames = styled.div`
	max-width: 500px;
	overflow-y: auto;
	overflow-x: hidden;
	:-webkit-scrollbar {
		width: 10px;
		background: #f1f1f1;
	}
`;

export const CartTotal = styled.div`
	text-transform: uppercase;
	font: normal normal 300 24px/85px arial;
	color: #707070;

	b {
		font: italic normal bold 24px/85px arial;
	}

	@media (max-width: 1180px) {
		font-size: 22px;
		b {
			font-size: 22px;
		}
	}
`;

export const CartBottom = styled.div`
	background-color: #707070;
	padding-top: 20px;
	padding-bottom: 20px;
	color: green;
	background: #f4f4f4 0% 0% no-repeat padding-box;
	border: 1px solid #e2e2e2;
	border-radius: 0 0 10px 10px;
	display: flex;
	justify-content: center;

	button {
		background: #f4f4f4 0% 0% no-repeat padding-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font: italic normal bold 35px/70px arial;
		letter-spacing: 0px;
		color: #27c383;
		cursor: pointer;
		border: 0px;
		margin: 0;
		padding: 0;
		width: 130px;
	}
	svg {
		margin-left: 10px;
	}
`;
