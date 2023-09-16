// import styled from "styled-components";

// const StyledSignUp = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: green;

//   .text {
//     text-align: left;
//     color: #32343e;
//     font-family: Sen;
//     font-size: 13px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     text-transform: uppercase;
//   }

//   .header {
//     display: flex;
//     flex-direction: row;
//     position: fixed;
//     top: 0;
//     width: 100%;
//   }
//   backBtn {
//     position: fixed;
//     top: 40px;
//     left: 50px;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     align-items: left;
//     justify-content: center;
//   }

//   input {
//     margin-bottom: 10px;
//     width: 327px;
//     height: 62px;
//     flex-shrink: 0;
//     background-color: #f0f5fa;
//     border-radius: 4px;
//     border: none;
//   }

//   .warn {
//     color: red;
//   }
// `;

// export default StyledSignUp;

import styled from "styled-components";

const StyledSignUp = styled.div`
  width: 327px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
  }

  BackBtn {
    position: fixed;
    top: 50px;
  }
  .title {
    margin-left: 16px;
    margin-top: 12px;
    color: #181c2e;
    font-family: Noto Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 129.412% */
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: 24px;
  }
  span {
    color: #32343e;
    font-family: Sen;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    text-align: left;
  }
  input {
    width: 327px;
    height: 62px;
    flex-shrink: 0;
    margin-bottom: 24px;
    background-color: rgb(241, 245, 250);
    border-radius: 4px;
    border: none;
  }
  button {
    width: 327px;
    height: 62px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #097629;
    color: #fff;
    text-align: center;
    font-family: Sen;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export default StyledSignUp;
