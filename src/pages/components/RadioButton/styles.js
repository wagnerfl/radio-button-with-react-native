import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: ${({horizontal}) => horizontal ? 'row' : 'column'};;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${({horizontal}) => horizontal && '5px'};
  margin-bottom: ${({horizontal}) => !horizontal ? '0px' : '5px'};
`;

export const RadioContainer = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const RadioInside = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #fffd;
`;

export const TextRadio = styled.Text`
  color: #fff;
  margin-left: 4px;
`;