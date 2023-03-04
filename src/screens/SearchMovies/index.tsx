
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { CardMovies } from "../../components/CardMovies/CardMovies";
import api from "../../services/api";
import { 
  Input,
  Container,
  Header,
  ListCard,
  ButtonReturn,
  ReturnIcon,
  AlingInput
} from './styles';
import { Alert } from "react-native";

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

  return (
    <Container>  
        <ButtonReturn onPress={() => navigation.navigate('Home')}>
          <ReturnIcon
          name='arrowleft'/>
          </ButtonReturn>
      <Header> 
        <AlingInput>
        <Input
          placeholder="Buscar"
          onChangeText={setBuscar}
          value={buscar}
        />
        <Button title="Buscar" onPress={handleGetMovies} />
        </AlingInput>
      </Header>
      <ListCard
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMovies data={item} />}
      />
    </Container>
  );
}