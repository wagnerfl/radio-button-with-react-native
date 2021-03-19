import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container, Content, RadioContainer, RadioInside, TextRadio } from './styles';

const RadioButton = ({selected, options = [], horizontal = false, onChangeSelect}) => {
  return (
    <Container horizontal={horizontal}>
      {options && options.map((opt, index) => 
        <TouchableOpacity onPress={() => onChangeSelect(opt, index)} key={index}>
          <Content horizontal={horizontal}>
            <RadioContainer>
              {selected === index && <RadioInside/>}
            </RadioContainer>
            <TextRadio>{opt}</TextRadio>
          </Content>
        </TouchableOpacity>
      )}
    </Container>
  );
}

export default RadioButton;