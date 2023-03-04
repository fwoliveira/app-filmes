
import React,  { useEffect, useState  } from "react";
import { 
    Container,
    Title,
    Footer,
    Header,
    TitleCard,
    ListCard
} from './styles';
import { Button } from "../../components/Button/index";
import api from "../../services/api";
import { CardMovies } from "../../components/CardMovies/CardMovies";

export default function Home({ navigation }) {
  const [moviesPopular, setMoviesPopular] = useState([]);
  var API_KEY = "api_key=2247e13afd4b79d1f58bd84a056ced28";
  var LANGUAGE = "pt-BR";
  useEffect(() => {
    api.get(`/movie/popular?${API_KEY}&language=${LANGUAGE}&page=1`)
        .then(response => response.data)
        .then(data => setMoviesPopular(data.results))
}, [])
  return (
    <Container>
      <Header>
     <Title>  Movies TMDB </Title>
      </Header>
     <Footer>
       <Button
       title="  ★ Favoritos "
       onPress={() => navigation.navigate('Favorite')}
       />
       <Button
       title="Buscar filme"
       onPress={() => navigation.navigate('SearchMovies')}
       />
    </Footer>
    <TitleCard> Filmes em cartaz</TitleCard>
      <ListCard
        data={moviesPopular}
        keyExtractor={(item,) => item.id  }
        renderItem={ ({ item,}) =>(
          <CardMovies data={item} />
        )}/>
    </Container>
  );
}


