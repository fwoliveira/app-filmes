
import { useState,useEffect } from "react";
import { AlignStar, Assessment, Container, ImageMovie, StarIcon, TtileMovie, VoteAverage, Button, StarFavorite,Header,AlingHeader,Description } from "./styles";
import firestore from "@react-native-firebase/firestore";
import { Alert } from 'react-native';


 interface Props  {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
    overview:string; 
    isActive: boolean;
}





export type PropsMovies   = {
    data: Props

}
interface PropsFavorite {
    id: string;
    title: string;
    poster_path: string;
    favorite: boolean;
    exibirBotao:boolean;
  }
  export type MoviesProps = {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
    overview:string;
    
    
  }








export function CardMovies({ data,}: PropsMovies  ) {

    // const [exibirBotao, setExibirBotao] = useState(true);
    const [favorites, setFavorites] = useState(false);

    function AddFavorite() {
        const db = firestore().collection("movies");
    
        db
        .where("id", "==", `${data.id}`)
        .onSnapshot(querySnapshot => {
          const data = querySnapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          }) as PropsFavorite[];
          console.log(data);
          
        })
    
        db
          .doc(`${data.id}`)
          .get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              // Atualiza o campo favorite para false
              db
                .doc(`${data.id}`)
                .update({ favorite: false })
                .then(() => console.log("Filme atualizado com sucesso!"))
                .catch((error) =>
                  console.error("Erro ao atualizar filme: ", error)
                );
            } else {
              db
                .doc(`${data.id}`)
                .set({ id: `${data.id}`, title: data.title, favorites: true , poster_path: data.poster_path,  vote_average: data.vote_average })
                .then(() =>  Alert.alert("Filme adicionado aos favoritos"))
                .catch((error) =>
                  console.error("Erro ao cadastrar filme: ", error)
                );
            }
          })
          .catch((error) =>
            console.error(
              "Erro ao verificar se o filme já está cadastrado: ",
              error
            )
          );
      }
      useEffect(() => {
        // Referência para a coleção de filmes no Firebase
        const moviesRef = firestore().collection("movies");
    
        moviesRef.doc(`${data.id}`).onSnapshot((doc) => {
          const favorite = doc.exists && doc.data()?.favorite;
          setFavorites(favorite || false);
        });
      }, [`${data.id}`]);


     
    return (
        <Container>
            
          <Header>  
            <ImageMovie
                source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
            /> 
            <AlingHeader>
            <Assessment>
                <AlignStar>
                    <StarIcon
                        name="star"
                    />
                </AlignStar>
                <VoteAverage>
                    {data.vote_average}/10
                </VoteAverage>
                <Button 
                onPress={AddFavorite}
                >
                <StarFavorite
                name={ "favorite" }
                />
            </Button> 
           
            </Assessment>  
            <TtileMovie>{data.title}</TtileMovie>
            <Description>{data.overview}</Description>
            </AlingHeader>
            </Header>
         
           
           
        </Container>
    )
}