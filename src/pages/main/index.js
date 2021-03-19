import React, {useState} from 'react';
import { View } from 'react-native';
import RadioButton from "../components/RadioButton";
import { Container, TextStyled, ContainerTitle, ContainerRadio} from './styles';

const Main = () => {

  const [selectedExample, setselectedExample] = useState(0);
  const [selected, setselected] = useState(0)

  const dataConfig = ['Vertical', 'Horizontal'];
  const data = ['Exemplo1', 'Exemplo2', 'Exemplo3'];

  const hadleChangeSelect = (opt, i) => {
    // console.log(`opt`, opt);
    // console.log(`i`, i);
    setselected(i);
  }


  const hadleChangeSelectExample = (opt, i) => {
    // console.log(`opt`, opt);
    // console.log(`i`, i);
    setselectedExample(i);
  }

  return (
    <Container>
      <ContainerTitle>
        <TextStyled>Component Radio Buttom</TextStyled>
        <RadioButton
          selected={selected}
          options={dataConfig}
          horizontal={true}
          onChangeSelect={(opt, i) => {
            hadleChangeSelect(opt, i);
          }}
        />
      </ContainerTitle>
      
      <ContainerRadio>
        <RadioButton
          selected={selectedExample}
          options={data}
          horizontal={selected}
          onChangeSelect={(opt, i) => {
            hadleChangeSelectExample(opt, i);
          }}
        />
      </ContainerRadio>
    </Container>
  );
}

export default Main;