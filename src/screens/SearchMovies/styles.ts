import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Input = styled(TextInput).attrs(({theme}) => ({
    placeholderTextColor:'#000',
  }))`
    width:70%;
    padding: 16px 16px;
    font-size: ${RFValue(16)}px;
    color: #000;
    background-color: #fff;
    border-radius:5px;
`;
 
export const AlingInput =styled.View`
  flex-direction:row;

`;

export const Container = styled.View`
 flex: 1 ;
 background-color: #000;
 justify-content: center;
 padding: 25px 25px 25px 25px;
 
`;

export const Header = styled.View`
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;
  
`
export const ListCard = styled.FlatList.attrs({
    showsVerticalScrollIndicator:true,
})``;


export const ButtonReturn = styled(TouchableOpacity)`
    padding: 25px 0 ;
`
export const ReturnIcon = styled(AntDesign)`
  color: #fff;
  font-size: ${RFValue(30)}px;

`