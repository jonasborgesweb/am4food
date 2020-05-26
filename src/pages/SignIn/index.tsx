import React,{useRef, useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationErrors';


import {
  Container,
  Content
} from './styles';

//Import Components
import Input from '../../components/Input';
import Button from '../../components/Button';

interface ISignInFormData{
  email: string;
  password:string;
}

const SignIn:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISignInFormData)=>{
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é Obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha Obrigatória')
        });

        await schema.validate(data,{abortEarly:false});

        //Falta ir no dataBase e procurar o Email e senha

        history.push('/Home');
      } catch (err) {
        if(err instanceof Yup.ValidationError){
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);

          console.log(errors);
        }
      }
    },[history])

  return(
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Button type="submit">
            <FiLogIn size={20} />
            Entrar
          </Button>

        </Form>
      </Content>
    </Container>
  )
}

export default SignIn;