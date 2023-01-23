import styled from 'styled-components/native';

export const Container = styled.View`
  margin-vertical: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #9c9c9c;
`;

export const DetailsContainer = styled.View`
  padding-vertical: 15px;
  padding-horizontal: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const DataItem = styled.View`
  // flex: 1;
  justify-content: center;
  align-itens: center;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ImageContainer = styled.View`
  margin-top: -20px;
`;

export const ImageBackground = styled.ImageBackground`
  height: 100%;
  
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;
`;

export const PrimaryText = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 700;
`;

export const SecondaryText = styled.Text`
  font-size: 16px;
  color: #f3f3f3;
  font-weight: 700;
`;