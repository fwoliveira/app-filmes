
import  React from "react";
import { 
    AlignStar, 
    Assessment, 
    Container, 
    ImageMovie, 
    StarIcon, 
    TtileMovie,
    VoteAverage, 
    Button, 
    StarFavorite,
    Header,
    AlingHeader,
 } from "./styles";
import firestore from "@react-native-firebase/firestore";

interface Props {
    id: string;
    title: string;
    poster_path: string;
    vote_average:string;
}

export type PropsMovies = {
    data: Props
}

export function CardMoviesFavorite({ data }: PropsMovies) {

  function handleDelet(){
        firestore()
        .collection('movies')
        .doc(data.id)
        .delete()
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
                onPress={handleDelet}
                >
                <StarFavorite
                name={ "delete" }
                />
            </Button> 
            </Assessment>  
            <TtileMovie>{data.title}</TtileMovie>
            </AlingHeader>
            </Header>
        </Container>
       
    )
}