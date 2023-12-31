import styled from "styled-components";
export const Item = styled.div`
	width: 100%;
	display: block;
	margin-bottom: 12px;
`;
export const Track = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const Track__title = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 447px;
`;
export const Track__image = styled.div`
	width: 51px;
	height: 51px;
	padding: 16px;
	background: #313131;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 17px;
`;
export const Track__svg = styled.svg`
	width: 18px;
	height: 17px;
	fill: transparent;
	stroke: #4e4e4e;
`;
export const Track__link = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
`;
export const Track__title__span = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #4e4e4e;
`;
export const Author = styled.div`
	width: 321px;
	display: flex;
	justify-content: flex-start;
`;
export const Author__link = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	text-align: left;
`;
export const Album = styled.div`
	width: 245px;
`;
export const Album__link = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #696969;
`;
export const TimeSvg = styled.svg`
	width: 14px;
	height: 12px;
	margin-right: 17px;
	fill: transparent;
	stroke: #696969;
`;
export const TimeText = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: right;
	color: #696969;
`;
