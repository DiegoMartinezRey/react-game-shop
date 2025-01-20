import styled from 'styled-components';

const StyledHome = styled.div`
	background-color: ${props => props.theme.colors.background};
	border-radius: 16px;
	color: ${props => props.theme.colors.text_primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export { StyledHome };
