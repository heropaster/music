import styled from "styled-components";

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
  z-index: 10;
`;
export const Bar__content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
`;
export const Bar__progress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;
export const Progress_thumb = styled.div`
  height: 5px;
  background: rgba(182, 114, 255, 1);
  width: 0;
`
export const TimeDisplay = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  padding: 5px;
  //background-color: rgba(0, 0, 0, 0.5);
  color: white;
`
export const Bar__playerContainer = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
export const Bar__player = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
