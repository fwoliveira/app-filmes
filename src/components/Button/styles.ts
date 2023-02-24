import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity).attrs(({theme}) => ({
    placeholderTextColor: '#000',
  }))`
    /* width:70%; */
    padding: 18px;
    border-radius:5px;
    background-color: #483D8B	;

    align-items:center;
    margin-left:10px;

`;

export const Title = styled.Text`
   
    font-size: ${RFValue(16)}px;
    color: #A9A9A9	;

`
