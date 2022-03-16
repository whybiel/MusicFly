import React from "react"
import styled from "styled-components"


const Container = styled.div`
    width:100%;
    background-color:#2F131E;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-image:url('');
`
const Title = styled.h2`
    font-size:3rem;
    margin:5vh 0 5vh 0;
    color:#fff;
`
const Legend = styled.h4`
    font-size:1.5rem;
    margin:5vh 0 0vh 0;
    color:#fff;
    font-weight:lighter;
`

const Card = styled.div`
    width:100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    overflow:hidden;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:3vh 0 3vh 0;
    margin:5vh 0 0vh 0;
    border-radius:40px;
    cursor:pointer;

    &:hover{
        transform:scale(1.1);
        transition: 1s ease;
        border:1px solid #fff;
    }
}
`
const Imag = styled.img`
    width:50vw;
`

const Image = styled.img`
    width:10vw;
    margin:0 0 3vh 0;
`
const Link = styled.a`
    width:50%;
    text-decoration:none;
    color:#fff;
`

export default class Main extends React.Component{
    state={
        imagem:"https://img.freepik.com/fotos-gratis/esboco-de-fone-de-ouvido-instrumentos-de-musica-em-papel-marrom_1379-524.jpg",
        musicas: [
            {
              title: "Marta 10",
              link:"https://www.youtube.com/watch?v=Tdxzntll32U",
              art:
                "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/4/6/d/d/1099081624382200.jpg"
            },
            {
              title: "Inception",
              link:"https://www.youtube.com/watch?v=RxabLA7UQ9k",
              art:
                "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/5/d/d/b/936121596200010.jpg"
            },
            {
              title: "Adventure of a lifetime",
              link:"https://www.youtube.com/watch?v=QtXby3twMmI",
              art:
                "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/a/3/8/8/471551448381863.jpg"
            },
            {
              title: "Something in The Way",
              link:"https://www.youtube.com/watch?v=4VxdufqB9zg",
              art:
                "https://wmgk.com/wp-content/uploads/sites/2/2021/08/44nirvana-3.jpg"
            },
            {
              title: "Deixa Acontecer",
              link:"https://www.youtube.com/watch?v=c4XeTP11EI8",
              art: "https://i1.sndcdn.com/artworks-000075692683-ypkw0f-t500x500.jpg"
            },
            {
              title: "vida loka2",
              link:"https://www.youtube.com/watch?v=mY_IgtAhjKQ",
              art:
                "https://img.quizur.com/f/img5ecf28d3622c42.48076258.jpg?lastEdited=1590634711"
            },
            {
              title: "I caught myself",
              link:"https://www.youtube.com/watch?v=GLNni7IL268",
              art: "https://i.scdn.co/image/ab67616d00001e028d0b937a8653b9ed3f9fb926"
            },
            {
              title: "Naked Hero",
              link:"https://www.youtube.com/watch?v=VNj3y8Xykz0",
              art: "https://i.scdn.co/image/ab67616d0000b273f231acc740683be478bfcdf3"
            },
            {
              title: "Antes de Falar",
              link:"https://www.youtube.com/watch?v=yyB1f7C8t6Y",
              art:
                "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e4/Marcos_Almeida_-_Eu_Sarau_-_Parte_1_-_2016.jpg/220px-Marcos_Almeida_-_Eu_Sarau_-_Parte_1_-_2016.jpg"
            },
            {
              title: "Ovelha Negra",
              link:"https://www.youtube.com/watch?v=XyveLQfO9XA",
              art:
                "https://upload.wikimedia.org/wikipedia/pt/thumb/4/40/RitaLee_Fruto_Proibido.jpg/220px-RitaLee_Fruto_Proibido.jpg"
            },
            {
              title: "Sk8er Boi",
              link:"https://www.youtube.com/watch?v=TIy3n2b7V9k",
              art:
                "https://upload.wikimedia.org/wikipedia/pt/thumb/0/01/Avril_Lavigne_Sk8er_Boi.jpg/220px-Avril_Lavigne_Sk8er_Boi.jpg"
            },
            {
              title: "JUNHO DE 94",
              link:"https://www.youtube.com/watch?v=GuYgMTAVVI0",
              art:
                "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/e/e/9/1/628451521047499.jpg"
            },
            {
              title: "Meu ego",
              link:"https://www.youtube.com/watch?v=Xv8xEOazrNc",
              art: "https://i.scdn.co/image/ab67616d0000b273ee9ee10d6fbb604e46316e6a"
            },
            {
              title: "Pedro Tiago e João no Barquinho",
              link:"https://www.youtube.com/watch?v=Tdwy3BZe61s",
              art:
                "https://cdn-images-1.listennotes.com/podcasts/hora-de-dormir-com/pedro-tiago-e-jo%C3%A3o-no-LeH9MzqNjuF-YNZp4Fqi5Hb.1400x1400.jpg"
            }
          ]
    }

    render(){
        return(
            <Container>
                <Title>As músicas preferidas da T3</Title>
                <Imag src={this.state.imagem} alt=""/>
                <Legend>Clique em um card para ouvir o som!</Legend>
                {this.state.musicas.map(item =>(
                    <Link href={item.link} target="_blank"><Card>
                        <Image src={item.art} alt=""/>
                        <h3>{item.title}</h3>
                    </Card></Link>
                ))}
            </Container>
        )
    }
}