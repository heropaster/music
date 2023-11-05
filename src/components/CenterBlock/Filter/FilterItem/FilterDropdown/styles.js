import styled from "styled-components";

export const Dropdown = styled.div`
	position: absolute;
	top: 48px;
	left: 0;
	border-radius: 12px;
	padding: 34px;
	background: #313131;
	overflow: hidden;
	min-width: 221px;
	max-height: 305px;
`;
export const List = styled.div`
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	max-height: 232px;
	gap: 28px;
	::-webkit-scrollbar {
		width: 4px;	}
	::-webkit-scrollbar-track {
		background: #4b4949;
		border-radius: 2px;
	}
	::-webkit-scrollbar-thumb {
		background: #fff;
		border-radius: 2px;
	}
`;

export const ListItem = styled.span`
	line-height: 24px;
	font-size: 20px;
	cursor: pointer;
	transition: color 0.3s ease;
	:hover {
		text-decoration: underline;
		color: #b672ff;
	}
`;
