
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { CardMovies } from "../../components/CardMovies/CardMovies";
import api from "../../services/api";
import { 
  Input,
  Container,
  Header,
  ListCard,
  TitleCard,
  ButtonReturn,
  ReturnIcon

} from './styles';
import {  ScrollView,Alert } from "react-native";

var API_KEY = "api_key=2247e13afd4b79d1f58bd84a056ced28";
var LANGUAGE = "pt-BR";


export default function SearchMovies({navigation}) {
  const [buscar, setBuscar] = useState("");
  const [movies, setMovies] = useState([]);
  

  async function handleGetMovies() {
    if (buscar === "") {
      Alert.alert(
        "Erro ao buscar",
        "Por favor insira o nome do filme desejado."
      );
    } else {
      const res = await api.get(
        `/search/movie?${API_KEY}&language=pt-BR&region=BR&query=${buscar}`
      );
      const data = await res.data;
      setMovies(data.results);
      setBuscar(buscar);
    }}

    const [moviesPopular, setMoviesPopular] = useState([]);
  

    useEffect(() => {
        api.get(`/movie/popular?${API_KEY}&language=${LANGUAGE}&page=1`)
            .then(response => response.data)
            .then(data => setMoviesPopular(data.results))


    }, [])

  return (
    <Container>  
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <ButtonReturn onPress={() => navigation.navigate('Home')}>
          <ReturnIcon
          name='arrowleft'/>
          </ButtonReturn>
      <Header>
        
        
        <Input
          placeholder="Buscar"
      
          onChangeText={setBuscar}
          value={buscar}
        />
        <Button title="Buscar" onPress={handleGetMovies} />
      </Header>
      <ListCard
        data={movies}
        // horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMovies data={item} />}
      />
      <TitleCard> Filmes Popular</TitleCard>
      <ListCard
        data={moviesPopular}
        // horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMovies data={item} />}
      />

    </ScrollView>
    </Container>
  );
}