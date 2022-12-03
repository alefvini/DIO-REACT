import React from 'react'
import logo from '../../assets/logo-dio.png';

import { useNavigate } from 'react-router-dom';
import { Button } from '../Button'
import { IHeader } from './types';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';


const Header = ({autenticado}: IHeader) => {
    const navigate = useNavigate();

    const clickHome = () => {
        navigate('/')
    }

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const cliqueCadastro = () => {
        navigate('/Cadastro')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt=" Logo DIO " onClick={clickHome} />
                {autenticado ? ( 
                    <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu> Live Code </Menu>
                    <Menu> Global </Menu>
                    </>
                ): null}
            </Row>

            <Row>
                {autenticado ? (
                    <UserPicture src="https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg" />
                ) : (
                    <>
                    <MenuRight href="#" onClick={clickHome}> Home </MenuRight>
                    <Button title="Entrar" onClick={handleClickSignIn} />
                    <Button title="Cadastrar" onClick={cliqueCadastro} />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
