import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';

export const Wrapper = styled.section`
  height: calc(100vh - 128px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSuccessAlert = styled(Alert)`
  width: 100%;
  min-height: 120px;

  & .MuiAlert-icon {
    align-items: center;
    justify-content: center;
  }

  & .MuiAlert-message {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const NoteUrl = styled.h1`
  font-size: 20px;
  font-weight: bold;

  &::selection {
    background: #ffb7b7;
  }
`;

export const CopiedMessage = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;
