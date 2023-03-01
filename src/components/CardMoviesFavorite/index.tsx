
import { useState,useEffect } from "react";
import { AlignStar, Assessment, Container, ImageMovie, StarIcon, TtileMovie, VoteAverage, Button, StarFavorite,Header,AlingHeader,Description } from "./styles";
import firestore from "@react-native-firebase/firestore";
import { MoviesProps, PropsMovies } from '../CardMovies/CardMovies';



export function CardMoviesFavorite({ data }: PropsMovies) {
    
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
                // onPress={AddFavorite}
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