import styled from 'styled-components';

export const InstructionsWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
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
