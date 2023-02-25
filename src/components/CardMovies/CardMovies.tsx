
import { AlignStar, Assessment, Container, ImageMovie, StarIcon, TtileMovie, VoteAverage, Button, StarFavorite,Header,AlingHeader,Description } from "./styles";
interface Props {
    title: string;
    poster_path: string;
    vote_average: number;
    overview:string;
}

type PropsMovies = {
    data: Props
}

export function CardMovies({ data }: PropsMovies) {
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
                <Button>
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