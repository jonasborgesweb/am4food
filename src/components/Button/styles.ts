import styled from 'styled-components';
import {shade} from 'polished';
import colors from '../../styles/colors';

export const Container = styled.button`
  background-color: ${colors.black};
  border: 0;
  padding: 18px 16px;
  max-width: 242px;
  width: 100%;
  color: ${colors.white};
  text-transform: uppercase;
  transition: 0.3s ease;
  font-weight: 500;
  margin-top: 16px;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: ${shade(0.2, `${colors.black}`)};
  }
`;