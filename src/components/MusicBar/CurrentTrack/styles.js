import styled from "styled-components";

export const PlayerTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;
export const PlayerTrack__contain = styled.div`
  width: max-content;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 300px;
  grid-template-columns: auto 300px;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const PlayerTrack__image = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  grid-column: 1;
  -ms-grid-column: 1;
  grid-area: image;
`;
export const PlayerTrack__svg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const PlayerTrack__author = styled.div`
  grid-row: 1;
  grid-column: 2;
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;
export const PlayerTrack__author__link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;
export const PlayerTrack__album = styled.div`
  grid-row: 2;
  grid-column: 2;
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;
export const PlayerTrack__album__link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;
export const PlayerTrack__likeDislike = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;
export const PlayerTrack__likeDislike_icon = styled.div`
  padding: 5px;
`;
export const PlayerTrack__likeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const PlayerTrack__dislike = styled.div`
  margin-left: 28.5px;
`;
export const PlayerTrack__dislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;
