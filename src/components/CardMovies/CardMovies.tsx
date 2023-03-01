
import { useState,useEffect } from "react";
import { AlignStar, Assessment, Container, ImageMovie, StarIcon, TtileMovie, VoteAverage, Button, StarFavorite,Header,AlingHeader,Description } from "./styles";
interface Props {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
    overview:string;
}

import firestore from "@react-native-firebase/firestore";
import { Alert } from 'react-native';


export type PropsMovies = {
    data: Props
}
interface PropsFavorite {
    id: string;
    title: string;
    poster_path: string;
    favorite: boolean;
  }
  export type MoviesProps = {
    id: string;
    title: string;
    poster_path: string;
    
  }

export function CardMovies({ data }: PropsMovies) {
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
          setFavorites(data[0].favorite)
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
                .set({ id: `${data.id}`, title: data.title, favorite: true , poster_path: data.poster_path  })
                .then(() => console.log("Filme cadastrado com sucesso!"))
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
                name="favorite"
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