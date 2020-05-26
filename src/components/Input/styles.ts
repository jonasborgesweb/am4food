import styled,{css} from 'styled-components';
import colors from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-size: 16px;
  font-weight: 300;
  background-color: ${colors.white};
  padding: 0 16px;
  width: 100%;
  transition: 0.3s ease;
  border-bottom: 2px solid ${colors.white};
  color: ${colors.grayDark};
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.orange};
      color: ${colors.orange};
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${colors.orange};
    `}

  input{
    flex: 1;
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    color: ${colors.black};
    transition: 0.2s ease;
    padding: 18px 0;

    &::placeholder {
      color: ${colors.grayDark};
    }
    
  }

  svg {
    margin-right: 16px;
  }
`


export const Error = styled.div`
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background-color: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;