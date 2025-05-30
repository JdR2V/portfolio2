import GridTarjetas from './GridTarjetas';

function Trabajos(){
   
   const proyectosPersonales = [
    {
      image: '/images/game-jams.png',
      alt: 'Game Jams',
      title: 'Participación en Game Jams',
      description: 'Usando diversos motores de juego y lenguajes de programación, he participado en varias Game Jams, creando juegos en un corto período de tiempo.',
      link: 'https://jdr2v.itch.io',
      button: 'Ver Proyecto',
    },
   /* {
      image: '/images/game2.jpg',
      alt: 'Juego Web',
      title: 'Juego: Aventura Web',
      description: 'Un juego de aventura interactivo basado en texto, donde los jugadores toman decisiones que afectan la historia. Inspirado en los primeros juegos de texto en internet.',
      link: 'https://www.ejemplo.com/game2',
      button: 'Ver Proyecto',
    },*/
    {
        image: '/images/multimedia.png',
        alt: 'Diseño Multimedia',
        title: 'Diseño Multimedia',
        description: 'Por mas que sea un apasionado por la programación y el diseño web, cabe recordar que soy un Diseñador Multimedia, por lo tanto, también he trabajado en edición de imagen y video.',
        link: 'https://www.behance.net/JdR2',
        button: 'Ver Proyecto',
    },
    {
        image: '/images/pixel-3d.png',
        alt: 'Arte',
        title: 'Arte 3D y Pixel Art',
        description: 'Para hacer juegos, también aprendí a realizar el arte, algunas cosas las hago por diversión, otras para probar que si puedo hacerlas.',
        link: 'https://sketchfab.com/JdR2',
        link2: 'https://www.instagram.com/jdr2v/',
        button: 'Ver Arte 3D',
        button2: 'Ver Arte 2D',
    }
   
  ];
   
    return (
        <div className="max-w-auto items-center justify-center text-center mx-auto px-4">
            <h2 className="text-white text-7xl pb-4 font-dm-sans text-shadow-lg/30">Lo que se hacer</h2>
            <p className="pb-4 lg:text-2xl text-lg">Estos son algunos de los proyectos que hago por diversión o para explorar nuevas tecnologias:</p>
            <GridTarjetas items={proyectosPersonales} />
        </div>
    )
}

export default Trabajos;