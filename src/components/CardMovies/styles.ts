import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 

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
  font-size: 18px;
  font-weight: bold;
  /* text-align: center; */
  margin-top: 10px;
`;

export const Assessment = styled.View`
  /* align-items: center; */
  
  flex-direction: row;
  margin-top: 10px;
`;

export const VoteAverage = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const StarIcon = styled(AntDesign)`
  align-items: center;
  font-size: 20px;
  color: #eead2d;
`;

export const AlignStar = styled.View`
  margin-right: 5px;
`;

export const Button = styled(TouchableOpacity)`
    padding: 5px;
    align-items:center;
    margin-left: 50px;

   

`
export const StarFavorite =  styled(Fontisto)`
  color: #eead2d;
  font-size:24px
`
export const Header = styled.View`
  flex-direction: row;
`
export const AlingHeader = styled.View`
   margin-left: 15px;

`

export const Description = styled.Text`
      color: #fff;
`

