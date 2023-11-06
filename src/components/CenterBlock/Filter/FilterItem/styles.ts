import styled from "styled-components";
interface FilterButtonProps {
	$active: string;
}
export const FilterItem = styled.div`
	position: relative;
    :not(:last-child) {
        margin-right: 10px;
`;
export const FilterButton = styled.div<FilterButtonProps>`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: 1px solid #ffffff;
	border-radius: 60px;
	padding: 6px 20px;
	transition: color 0.3s ease, border-color 0.3s ease;
	cursor: pointer;
	${(props) =>
		props.$active &&
		`
		border-color: #b672ff;
		color: #b672ff;
    `}
`;
