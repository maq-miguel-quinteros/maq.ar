import { GlobalStyle } from './GlobalStyle';

import {Title} from './components/atoms/Title'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Title level={'h1'} text={'MAQ.AR'}/>
    </>
  );
};
