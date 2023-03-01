
import React, { useEffect, useState } from "react";
import { CardMovies, MoviesProps } from '../../components/CardMovies/CardMovies';
import { 
  Container,
  ListCard,
  ButtonReturn,
  ReturnIcon,
  TitleCard

} from './styles';
import {  ScrollView,} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { CardMoviesFavorite } from "../../components/CardMoviesFavorite";




export default function FavoriteMovies({navigation}) {

 
    const [movies, setMovies] = useState<MoviesProps[]>([]);
  
    useEffect(()=>{
      firestore()
      .collection('movies')
       .get()
       .then(response => {
        const data = response.docs.map( doc => {
          return {
            id: doc.id,
            ...doc.data()
        }}) as MoviesProps[]
        setMovies(data);
       })
       .catch(error => console.error(error))
    },[])

  return (
    <Container>  
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <ButtonReturn onPress={() => navigation.navigate('Home')}>
          <ReturnIcon
          name='arrowleft'/>
          </ButtonReturn>
          <TitleCard>Filmes favoritos</TitleCard>
      <CardMoviesFavorite/>
    </ScrollView>
    </Container>
  );
}