import styled from "styled-components";

export const Styles = {
  Wrapper: styled.div`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  `,
  Title: styled.h1`
    text-transform: uppercase;
    text-align: center;
  `,
  FormWrapper: styled.div`
    width: 100%;
    text-align: center;
    & form {
      display: flex;
      justify-content: space-between;
    }
    & input {
      width: 80%;
      padding: 0 5px;
      border-bottom: 1px solid black;
    }
    & button {
      border: 1px solid black;
      border-radius: 20px;
      padding: 10px 20px;
      cursor: pointer;
    }
  `,
  ListWrapper: styled.div`
    display: flex;
    justify-content: center;
    & ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 5px;
    }
    & li {
      list-style: none;
      display: grid;
      grid-template-columns: auto 50px 50px 50px;
      gap: 5px;
      & span {
        margin-right: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      & button {
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px 5px;
        word-break: keep-all;
        cursor: pointer;
      }
    }
  `,
};
