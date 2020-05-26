import styled from 'styled-components';
import colors from '../../styles/colors';

import bgDefault from '../../images/bg-default.png';

export const Container = styled.section`
  background-image: url(${bgDefault});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  min-height: 100vh;

  &::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(243,243,243);
    background: linear-gradient(-45deg, rgba(243,243,243,1) 0%, rgba(232,232,232,1) 100%);
    opacity: .85;
  }
`;
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 520px;
  width: 96%;
  box-shadow: 0 2px 6px rgba(0,0,0,.3);

  form{

    a{
      display: block;
    }
  }
`;