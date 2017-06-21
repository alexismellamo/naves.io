import React, { Component } from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Layout,
  Fill,
  Link
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import preloader from 'spectacle/lib/utils/preloader';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  bruce: require('../assets/bruce-lee.jpg'),
  flashLogo: require('../assets/flash-logo.png'),
  flashLogoDc: require('../assets/flash-logo-dc.jpg'),
  horribleGames: require('../assets/horrible-games.jpg'),
  iDareYou: require('../assets/i-dare-you.jpg'),
  miguelHidalgo: require('../assets/miguel-hidalgo.jpg')
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE',
  black: 'black'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

const note2 = `naves.io,
la aventura de hacer videojuegos en el browser
pero antes de empezar con esto hablemos de alguien muy importante.
YO merengues!
`;

const note3 = `Lee todo eso, cuando digas React menciona que la presentacion está hecha 100% en React.
PERO NO LEAS LA ULTIMA`;

const note4 = 'Pero ahora pongamonos serios y empecemos con la plática';

const note5 = `1996.
El peor año del mundo.
El año donde esta monstruosidad fue creada
`;

const note6 = ` Flash! Adobe Flash!
Y esto trajo un montón de juegos chafas para niños.
Y fallas de seguridad, y un lenguaje de programación horrible.
Y no, no me refiero a JavaScript
`;

const note7 = `Pueden ver que hay juegos que hasta te hacen preguntarte que diablos le pasa a la gente.
al parecer los embarazos de las chicas de frozen es lo que juega los niños.
oh dios, espero que sean los niños los que lo juegan
`;

const note8 = `(en paso 2) Steve Jobs los vetó de sus productos
(en el ultimo)
`;

const note9 = `Cada vez que veo que alguna pagina sigue usando Flash
Esto me dan ganas de decirle
`;

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary" notes="hola">
          <Text textColor="primary">Hola</Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary" notes={note2}>
          <Heading size={6} fit lineHeight={1} textColor="secondary">
            naves.io
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit>
            La aventura de hacer juegos en el browser
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="black">
          <Heading size={1} textColor="primary">Alexis Navarro</Heading>
          <Appear><Text size={6} textColor="quartenary">Experto en memes</Text></Appear>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" textColor="primary" notes={note3} >
          <Heading size={6} textColor="primary" caps>Cosas que me gustan:</Heading>
          <List transition={['slide']}>
            <Appear><ListItem>JavaScript</ListItem></Appear>
            <Appear><ListItem>Cerveza</ListItem></Appear>
            <Appear><ListItem>React</ListItem></Appear>
            <Appear><ListItem>Memes</ListItem></Appear>
            <Appear><ListItem>No llegar temprano</ListItem></Appear>
            <Appear><ListItem>Llorar</ListItem></Appear>
            <Appear><ListItem>Tu hermana</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="black">Este soy yo llorando en distintos lugares</Heading>
          <Image src={images.kat.replace('/', '')} margin="0px auto 40px" height="500px"/>
        </Slide>
        <Slide transition={['slide']} bgImage={images.bruce.replace('/', '')} notes={note4}>
          <Layout>
            <Fill><Heading textColor="black" size={1}>Seriouslee</Heading></Fill>
            <Fill />
          </Layout>
        </Slide>
        <Slide transition={['zoom']} bgColor="black" textColor="primary" notes={note5}>
          <Heading textColor="primary" size={1}>Noviembre de 1996</Heading>
        </Slide>
        <Slide transition={['fade']} bgImage={images.flashLogo.replace('/', '')} notes={note6}>
          <Text textColor="primary">Huelo feo</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" notes={note7}>
          <Heading size={6} textColor="black">Ejemplos de juegos horribles hechos con Flash</Heading>
          <Image src={images.horribleGames.replace('/', '')} margin="0px auto 40px" height="500px"/>
        </Slide>
        <Slide transition={['fade']} bgImage={images.flashLogoDc.replace('/', '')} bgDarken={0.75} textColor="primary">
          <BlockQuote>
            <Quote>Por lo que más quieran, no me usen</Quote>
            <Cite>Flash</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" textColor="primary" notes={note8} >
          <Heading size={6} textColor="primary" caps>Cosas que hace Flash y no están chidas:</Heading>
          <List transition={['slide']}>
            <Appear><ListItem>Existir</ListItem></Appear>
            <Appear><ListItem>No sirve en productos Apple</ListItem></Appear>
            <Appear><ListItem>Patean bebés</ListItem></Appear>
            <Appear><ListItem>Hacen lentos los sitios web</ListItem></Appear>
            <Appear><ListItem>Necesitan un plugin para funcionar</ListItem></Appear>
            <Appear><ListItem>Le ponen piña a la pizza</ListItem></Appear>
            <Appear><ListItem>La seguridad se la pasan por los tanates</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} align="right right" bgImage={images.iDareYou.replace('/', '')} bgDarken={0.5} notes={note9} textColor="primary">
          <Layout>
            <Fill />
            <Fill>
              <Text margin="0px auto 0px" fill textColor="primary" textAlign="right">Javascript motherf*cker do you speak it!? Say Flash again, say it, I dare you, I double dare you, Say Flash one more goddamn time</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            WebGL
          </Heading>
          <Heading size={1} fit caps>
            es una API de JavaScript
          </Heading>
          <Heading size={1} fit caps textColor="black">
            para rendenriar gráficos 2D y 3D
          </Heading>
          <Text bold caps textColor="tertiary">Sin ningún plugin</Text>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Solo JavaScript!</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary" notes="question">
          <Text textColor="primary">¿WebGL es lo mejor del mundo?</Text>
          <Appear><Text>No</Text></Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary" notes="question">
          <Text textColor="primary">¿WebGL es la versión web de OpenGL?</Text>
          <Appear><Text>Duh, obvio microbio</Text></Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary" notes="question">
          <Text textColor="primary">¿Qué es lo mejor de WebGL?</Text>
          <Appear><Text>Que no es Flash</Text></Appear>
        </Slide>
        <Slide transition={['fade']} bgImage={images.miguelHidalgo.replace('/', '')} bgDarken={0.75} textColor="primary">
          <BlockQuote>
            <Quote>WebGL salvó mi vida</Quote>
            <Cite>Miguel Hidalgo</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={6} fit lineHeight={1} textColor="secondary">
            naves.io
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit>
            Mi intento por hacer un juego con WebGL
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            WebGL
          </Heading>
          <Heading size={1} fit caps>
            es una API de JavaScript
          </Heading>
          <Heading size={1} fit caps textColor="black">
            para rendenriar gráficos 2D y 3D
          </Heading>
        </Slide>
        <CodeSlide
          lang="jsx"
          code={require('raw-loader!/Users/alexis/Documents/Dev/michelada/naves.io/js/controls/controls.js')}
          margin="20px auto"
          ranges={[
            { loc: [0, 0], title: 'Control.js' },
            { loc: [0, 6], note: 'The Beginning' },
            { loc: [6, 11], note: 'Heres a note!' },
            { loc: [11, 16] },
            { loc: [16, 21] },
            { loc: [21, 26] }
          ]}
        />
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Hacer videojuegos es un pedo</Quote>
            <Cite>Alexis Navarro</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
