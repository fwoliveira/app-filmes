
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { CardMovies } from "../../components/CardMovies/CardMovies";
import api from "../../services/api";
import { 
  Container,
  ListCard,
  ButtonReturn,
  ReturnIcon,
  TitleCard

} from './styles';
import {  ScrollView,} from "react-native";




export default function FavoriteMovies({navigation}) {
//   const [buscar, setBuscar] = useState("");
//   const [movies, setMovies] = useState([]);
  

//   async function handleGetMovies() {
//     if (buscar === "") {
//       Alert.alert(
//         "Erro ao buscar",
//         "Por favor insira o nome do filme desejado."
//       );
//     } else {
//       const res = await api.get(
//         `/search/movie?${API_KEY}&language=pt-BR&region=BR&query=${buscar}`
//       );
//       const data = await res.data;
//       setMovies(data.results);
//       setBuscar(buscar);
//     }}

//     const [moviesPopular, setMoviesPopular] = useState([]);
  

//     useEffect(() => {
//         api.get(`/movie/popular?${API_KEY}&language=${LANGUAGE}&page=1`)
//             .then(response => response.data)
//             .then(data => setMoviesPopular(data.results))


//     }, [])

  return (
    <Container>  
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <ButtonReturn onPress={() => navigation.navigate('Home')}>
          <ReturnIcon
          name='arrowleft'/>
          </ButtonReturn>
          <TitleCard>Filmes favoritos</TitleCard>
      <ListCard
        // data={movies}
        // horizontal={true}
        // keyExtractor={(item) => item.id}
        // renderItem={({ item }) => <CardMovies data={item} />}
      />
    </ScrollView>
    </Container>
  );
}