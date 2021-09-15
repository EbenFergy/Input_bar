import styled from "styled-components";

const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  /* border: 2px solid; */

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  z-index: 1;
  border: 2px solid;
`;
export default ModalStyle;
