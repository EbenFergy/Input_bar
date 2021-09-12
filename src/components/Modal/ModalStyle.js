import styled from "styled-components";

const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  /* border: 2px solid; */

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border: 2px solid;
    top: 0px;
  }
`;
export default ModalStyle;
