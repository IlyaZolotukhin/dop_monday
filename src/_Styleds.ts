import styled from "styled-components";

const Banknote = styled.div`
  background-color: ${props => props.color};
  width: 400px;
  height: 200px;
  margin: 10px;  
`
const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`
const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;
`
export const S = {
    Banknote,
    Name,
    Nominal
};