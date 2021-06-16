import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 80vh;
	display: flex;
	justify-content: center;
	h2 {
		font-size: 50px;
		margin-top: 100px;

		@media (max-width: 840px) {
			font-size: 30px;
		}
	}
`;
