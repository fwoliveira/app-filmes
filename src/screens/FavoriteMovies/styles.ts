import styled from 'styled-components/native';
import { TextInput, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
 flex: 1 ;
 background-color: #000;
 justify-content: center;
 padding: 25px 25px 25px 25px;
`;
export const ListCard = styled.FlatList.attrs({
  showsVerticalScrollIndicator:true,
})``;

export const  TitleCard = styled.Text`
  color: #fff;
  font-size: ${RFValue(26)}px;
  font-weight: bold;
  padding-bottom:20px;
  text-align: center;
`
export const ButtonReturn = styled(TouchableOpacity)`
  padding: 25px 0 0 0 ;
`
export const ReturnIcon = styled(AntDesign)`
  color: #fff;
  font-size:${RFValue(30)}px;

`