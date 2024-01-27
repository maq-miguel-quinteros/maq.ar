import { GlobalStyle } from './GlobalStyle';

import {Title} from './components/atoms/Title';
import {Image} from './components/atoms/Image';
import {Icon} from './components/atoms/Icon';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Image variant={'logo'} src={'https://media.licdn.com/dms/image/C4E03AQFeWGLOObr_Vg/profile-displayphoto-shrink_200_200/0/1650461528496?e=1711584000&v=beta&t=TIwnN66AKyr8ATkuLY7qjR_0tKfwSEofafD7-ts3KVc'} alt={'Miguel Ángel Quinteros'} />
      <Title variant={'prueba'} level={'h1'} text={'MAQ.AR'}/>
      <Icon type={'facebook'} />
    </>
  );
};
