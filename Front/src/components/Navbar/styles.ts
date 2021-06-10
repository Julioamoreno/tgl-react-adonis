import styled from 'styled-components';

export const Nav = styled.nav`
	font-weight: 500;
	font: italic normal bold arial;
	border-bottom: 1px solid #ebebeb;
	width: 100vw;
	max-width: 1080px;
	display: flex;
	align-content: flex-end;
	margin: auto;
	padding: 0;

	@media (max-width: 1180px) {
		max-width: 90%;
	}
	@media (max-width: 840px) {
		width: 99%;
	}
`;

export const Title = styled.a`
	color: #707070 !important;
	left: 141px;
	width: 86px;
	height: 53px;
	text-align: center;
	font: italic normal bold 44px/70px arial;
	letter-spacing: 0px;
	opacity: 1;
	padding-left: 10px;
	::after {
		content: '';
		display: block;
		position: absolute;
		width: 108px;
		border-bottom: 6px solid #b5c401;
		border-radius: 6px;
		pointer-events: none;
		transform: translateX(-10px) translateY(-9px);
	}
`;

export const Content = styled.ul`
	width: 100vw;
	list-style: none;
	text-decoration: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	margin: 10px 0;
	a {
		text-decoration: none;
		color: #707070;
	}
	li {
		margin-left: 20px;
		font: italic normal bold 20px arial;
	}
`;

export const ContentLeft = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;

	margin-left: 30px;
`;

export const ContentRight = styled.ul`
	width: 50vw;
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	li {
		margin-left: 20px;
		font: italic normal bold 20px arial;
	}
	svg {
		vertical-align: text-bottom;
	}
`;

export const LogoutLi = styled.li`
	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 110px;
	}
`;
