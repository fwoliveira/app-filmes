
import React from "react";
import { 
    Container,
    Title,
    Footer,
    Header

} from './styles';
import { Button } from "../../components/Button/index";


export default function Home() {
 

  return (
    <Container>
      <Header>
     <Title> App Movies </Title>
      </Header>
     <Footer>
       <Button
       title="  ★ Favoritos "/>
       <Button
       title="Buscar filme"
      //  onPress={}
       />
    </Footer>
    </Container>
  );
}


