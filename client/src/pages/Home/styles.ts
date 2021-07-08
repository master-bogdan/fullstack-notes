import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 10% 0;
`;

export const BtnBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
`;

export const InstructionsBlock = styled.ul`
  padding-left: 10px;
  margin-bottom: 40px;

  li {
    display: flex;
    align-items: center;
    line-height: 30px;
    a {
      color: blue;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
