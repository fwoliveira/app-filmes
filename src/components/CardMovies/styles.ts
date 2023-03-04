import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 60%;
  margin-right: 20px;
  margin-top: 30px;
`;

export const ImageMovie = styled.Image`
  width: 140px;
  height: 250px;
  border-radius: 5px;
`;

export const TtileMovie = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Assessment = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const VoteAverage = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
`;

export const StarIcon = styled(AntDesign)`
  align-items: center;
  font-size:${RFValue(20)}px ;
  color:  #eead2d ;
`;

export const AlignStar = styled.View`
  margin-right: 5px;
`;

export const Button = styled(TouchableOpacity)`
    margin-left: 50px;
`;
export const StarFavorite =  styled(MaterialIcons)`
  color:  #B22222;
  font-size:24px
`;

export const Header = styled.View`
  flex-direction: row;
`;
export const AlingHeader = styled.View`
   margin-left: 15px;
`;
export const Description = styled.Text`
      color: #fff;
`;

