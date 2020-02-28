import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 360px;
  background-color: #f1f1f1;
  height: 580px;
  padding: 80px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  @media screen and (max-width: 320px) {
    height: 530px;
    width: 290px;
  }
  @media screen and (min-width: 321px) and (max-width: 767px) {
    width: 320px;
  }

  h1 {
    text-align: center;
    margin-bottom: 60px;
    color: #333333;
  }
`;

export const ErrorMsg = styled.p`
  color: ${props => (props.error ? '#ee4646' : '')};
  margin-top: 5px;
`;

export const DivInputs = styled.div`
  margin: 30px 0;
`;

export const Input = styled.input`
  border-color: ${props => (props.error ? '#ee4646' : '#adadad')};
  font-size: 15px;
  color: #333;
  border-top: none;
  border-right: none;
  border-left: none;
  width: 100%;
  background: none;
  padding: 0 5px;
  height: 40px;

  :focus {
    border-color: ${props => (props.error ? '#ee4646' : '#8e44ad')};
  }

  :hover {
    border-color: #8e44ad;
  }
`;

export const LoginBtn = styled.button`
  display: inline-block;
  width: 100%;
  height: 50px;
  font-size: 16px;
  margin-top: 20px;
  border: none;
  background: linear-gradient(120deg, #3498db, #8e44ad, #3498db);
  background-size: 200%;
  color: #fff;
  transition: 0.5s;

  :hover {
    background-position: right;
  }
`;
