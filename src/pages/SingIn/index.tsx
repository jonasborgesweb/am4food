import React from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import {
  Container,
  Content
} from './styles';

//Import Components
import Input from '../../components/Input';
import Button from '../../components/Button';

const SingIn:React.FC = () => {

  return(
    <Container>
      <Content>
        <form>
          <Input 
            name="email" 
            icon={FiMail} 
            placeholder="Digite seu e-mail da AM4" 
          />
          <Input 
            type="password" 
            name="password" 
            icon={FiLock} 
            placeholder="Digite sua senha" 
          />

          <Link to="/forgot">Esqueci minha senha</Link>

          <Button type="submit">Entrar</Button>

        </form>
      </Content>
    </Container>
  )
}

export default SingIn;