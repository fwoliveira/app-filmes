
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { CardMovies } from "../../components/CardMovies/CardMovies";
import api from "../../services/api";
import { 
  Input,
  Container,
  Header,
  ListCard,
  TitleCard1,
  TitleCard2,

} from './styles';
import {  ScrollView } from "react-native";

var API_KEY = "?api_key=2247e13afd4b79d1f58bd84a056ced28";
var LANGUAGE = "pt-BR";
var COUNTRY = "BR";

export default function SearchMovies() {
  const [buscar, setBuscar] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesRecommended, setMoviesRecommended] = useState([]);

  async function handleGetMovies() {
    const res = await api.get(
      `search/movie${API_KEY}&language=${LANGUAGE}&region=${COUNTRY}&query=${buscar}`
    )
    const data = await res.data
    setMovies(data.results)
    setBuscar(buscar);
  }

  useEffect(() => {
    api.get(`/movie/popular${API_KEY}&language=${LANGUAGE}&page=1`)
        .then(response => response.data)
        .then(data => setMoviesPopular(data.results))

    api.get(`/movie/top_rated${API_KEY}&language=${LANGUAGE}&page=1`)
        .then(response => response.data)
        .then(data => setMoviesRecommended(data.results))
}, [])

  return (
    <Container>  
      <ScrollView
      showsVerticalScrollIndicator={false}>
      <Header>
        <Input
          placeholder="Buscar"
      
          onChangeText={setBuscar}
          value={buscar}
        />
        <Button title="Buscar" onPress={handleGetMovies} />
      </Header>
    
      <TitleCard1>Em cartaz</TitleCard1>
      <ListCard
        data={moviesPopular}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMovies data={item} />}
      />
      <TitleCard2> Recomendados</TitleCard2>
      <ListCard
        data={moviesRecommended}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMovies data={item} />}
      />
    </ScrollView>
    </Container>
  );
}