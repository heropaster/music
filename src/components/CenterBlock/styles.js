import styled from "styled-components";

export const Centerblock = styled.div`
	width: auto;
	-webkit-box-flex: 3;
	-ms-flex-positive: 3;
	flex-grow: 3;
	padding: 20px 40px 20px 111px;
`;
export const PlaylistCol = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 2px;
	color: #696969;
	text-transform: uppercase;
`;
export const Col1 = styled(PlaylistCol)`
	width: 447px;
`;
export const Col2 = styled(PlaylistCol)`
	width: 321px;
`;
export const Col3 = styled(PlaylistCol)`
	width: 245px;
`;
export const Col4 = styled(PlaylistCol)`
	width: 60px;
	text-align: end;
`;
export const Col4Svg = styled.svg`
	width: 12px;
	height: 12px;
	fill: transparent;
	stroke: #696969;
`;
export const H2 = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 72px;
	letter-spacing: -0.8px;
	margin-bottom: 45px;
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
`;
export const PlayListTtile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`;
