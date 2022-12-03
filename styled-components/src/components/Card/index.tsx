import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://i.pinimg.com/originals/42/12/dc/4212dcb38324927197b60b3fd6435d7c.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://images-ext-1.discordapp.net/external/39_KVxs3A8kMYySBeS8JwIzsd0XXPKS6v_v4BWt-JYo/https/wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg"/>
         <div>
          <h4>Alef Vinícius</h4>
          <p>Há 6 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }