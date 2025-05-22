import GridTarjetas from './GridTarjetas';

function Works(){

    const personalProyects = [
    {
      image: '/images/game-jams.png',
      alt: 'Game Jams',
      title: 'Game Jams participation',
      description: 'Using various game engines and programming languages, I have participated in several Game Jams, creating games in a short period of time.',
      link: 'https://jdr2v.itch.io',
      button: 'See Project',
    },
    /*{
      image: '/images/game2.jpg',
      alt: 'Web Game',
      title: 'Game 1: Web Adventure',
      description: 'An interactive text-based adventure game where players make decisions that affect the story. Inspired by early text games on the internet.',
      link: 'https://www.ejemplo.com/game1',
      button: 'See Project',
    },*/
    {
        image: '/images/multimedia.png',
        alt: 'Multimedia Design',
        title: 'Multimedia Design',
        description: 'Although I am passionate about programming and web design, it is worth remembering that I am a Multimedia Designer, so I have also worked in image and video editing.',
        link: 'https://www.behance.net/JdR2',
        button: 'See Project',
    },
    {
        image: '/images/pixel-3d.png',
        alt: '3D Art',
        title: '3D/2D Art',
        description: 'Here are some pieces of art I have made, both in 3D and 2D. I am always looking to improve my skills.',
        link: 'https://sketchfab.com/JdR2',
        link2: 'https://www.instagram.com/jdr2v/',
        button: 'See 3D Art',
        button2: 'See 2D Art',
    }
  
  ];

    return (
        <div className="max-w-auto items-center justify-center text-center mx-auto px-4">
            <h2 className="text-white text-7xl pb-4 font-dm-sans text-shadow-lg/30">What I know</h2>
            <p className="pb-4 lg:text-2xl text-lg">These are some of the projects I've worked on, either for fun or to learn a new tech:</p>
            <GridTarjetas items={personalProyects} />
          
        </div>
    )
}

export default Works;