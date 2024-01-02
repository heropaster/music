import styled from "styled-components";

export const Controls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;
export const Controls__button = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;

  align-items: center;
`;
export const Prev = styled(Controls__button)`
  margin-right: 23px;
`;
export const Play = styled(Controls__button)`
  margin-right: 23px;
`;
export const Next = styled(Controls__button)`
  margin-right: 28px;
  fill: #a53939;
`;
export const Repeat = styled(Controls__button)`
  margin-right: 24px;
`;
export const Shuffle = styled(Controls__button)`
  display: flex;
  align-items: center;
}
`;
export const PrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;
export const PlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;
export const NextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;
export const RepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const ShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
