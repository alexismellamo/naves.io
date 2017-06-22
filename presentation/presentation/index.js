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
  miguelHidalgo: require('../assets/miguel-hidalgo.jpg'),
  playN64: require('../assets/play-n64.png'),
  myNameIs: require('../assets/my-name-is.jpg'),
  space: require('../assets/space-background.svg'),
  spaceship: require('../assets/spaceship-body.png'),
  turret: require('../assets/spaceship-turret.png'),
  bgControlPad: require('../assets/bg-control-pad.svg'),
  bgControlAngle: require('../assets/bg-control-angle-indicator.svg'),
  explotion: require('../assets/explotion.gif'),
  yop: require('../assets/yop.gif'),
  timeCard: require('../assets/time-card.jpg'),
  gameplay: require('../assets/gameplay.gif'),
  mathLady: require('../assets/math-lady.png')
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

const note10 = `Cuando empecé con este proyecto quería hacer algo divertido pero tampoco tan difícil, porque no tenía tanto tiempo, no duden de mis habilidades
Así que pensé en navecitas, de ahí el nombre, porque qué tan dificil puede hacer un juego de navecitas y pium pium
Pero no quería hacer naves que dispararan solas, así que tenía que ser multijugador
Va a ser en 2D porque es más fácil así y no sé nada sobre modelado
Pero quería rescatar algo que se está perdiendo:
`;

const note11 = `jugar en el mismo cuarto, donde te puedes reir en la cara de la gente a la que le ganas,
ahora, en el browser no puedes conectar controles a un browser (o sí?), así que necesitaba otra cosa
y pensé en usar el celular como control, así que ahora sí, me dispuse a hacer el juego
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
        <Slide transition={['fade']} bgImage={images.myNameIs.replace('/', '')} bgDarken={0.8}>
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
        <Slide transition={['fade']} bgColor="black" notes={note10}>
          <Heading size={1} fit>
            ¿Qué quería hacer?
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" notes={note11}>
          <Image src={images.playN64.replace('/', '')} margin="0px auto 40px" height="600px"/>
        </Slide>
        <Slide transition={['fade']} bgColor="black" notes={''}>
          <Heading size={1} fit textColor="primary">
            ¿Qué cosas se necesitan básicas?
          </Heading>
           <List transition={['slide']} textColor="tertiary">
            <Appear><ListItem>Sprites</ListItem></Appear>
            <Appear><ListItem>WebGL</ListItem></Appear>
            <Appear><ListItem>JavaScript</ListItem></Appear>
            <Appear><ListItem>Matemáticas básicas</ListItem></Appear>
            <Appear><ListItem>WebSockets</ListItem></Appear>
            <Appear><ListItem>Backend</ListItem></Appear>
            <Appear><ListItem>Ganas de hacerlo</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgImage={images.space.replace('/', '')} notes={''}>
          <Text textColor="primary">Sprites: </Text>
          <Image src={images.spaceship.replace('/', '')} margin="0px auto 40px" height="100px"/>
          <Image src={images.turret.replace('/', '')} margin="0px auto 40px" height="100px"/>
          <Image src={images.bgControlPad.replace('/', '')} margin="0px auto 40px" height="100px"/>
          <Image src={images.bgControlAngle.replace('/', '')} margin="0px auto 40px" height="100px"/>
          <Image src={images.explotion.replace('/', '')} margin="0px auto 40px" height="100px"/>
        </Slide>
        <Slide transition={['fade']} bgColor="black" notes={'y me puse manos a la obra'}>
          <Image src={images.yop.replace('/', '')} margin="0px auto 40px" height="600px"/>
        </Slide>
        <Slide transition={['fade']} bgColor="black" notes={'y después de mucho sufrir y llorar logramos el cometido'}>
          <Image src={images.timeCard.replace('/', '')} margin="0px auto 40px" height="600px"/>
        </Slide>
        <Slide transition={['fade']} bgColor="black" notes={'y después de mucho sufrir y llorar logramos el cometido'}>
          <Image src={images.gameplay.replace('/', '')} margin="0px auto 40px" height="500px"/>
        </Slide>
        <Slide transition={['slide']} bgImage={images.mathLady.replace('/', '')} bgDarken={0.8} notes="question">
          <Text textColor="primary">Se acuerdan que les dije que necesitamos matemáticas?</Text>
        </Slide>
        <CodeSlide
          lang="jsx"
          code={require('raw-loader!/Users/alexis/Documents/Dev/michelada/naves.io/js/controls/pad.js')}
          ranges={[
            { loc: [0, 0], title: 'pad.js' },
            { loc: [63, 68], note: 'Si alguien sabe lo que está pasando aquí le compro una chela' }
          ]}
        />
        <CodeSlide
          lang="jsx"
          code={require('raw-loader!/Users/alexis/Documents/Dev/michelada/naves.io/js/game.js')}
          ranges={[
            { loc: [0, 0], title: 'The loop' },
            { loc: [28, 33] },
            { loc: [33, 39] }
          ]}
        />
        <CodeSlide
          lang="jsx"
          code={require('raw-loader!/Users/alexis/Documents/Dev/michelada/naves.io/js/spaceship.js')}
          ranges={[
            { loc: [0, 0], title: 'spaceship.js' },
            { loc: [105, 111] },
            { loc: [111, 123] },
            { loc: [123, 131] },
            { loc: [132, 138] },
            { loc: [138, 149] },
            { loc: [150, 159] },
            { loc: [159, 166] }
          ]}
        />
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            naves.io
          </Heading>
          <Heading size={1} fit caps>
            Un juego de navecitas
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Donde puedes matar a otras navecitas
          </Heading>
          <Link href="https://github.com/alexisllamas/naves.io">
            <Text bold caps textColor="tertiary">Ver en Github</Text>
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Hacer videojuegos es un pedo</Quote>
            <Cite>Alexis Navarro</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary" notes="hola">
          <Text textColor="primary">Adiós</Text>
        </Slide>
      </Deck>
    );
  }
}
