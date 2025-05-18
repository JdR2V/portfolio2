import GridTarjetas from './GridTarjetas';


function Profesional(){

    const proyectosProfesionales = [
    {
      image: '/images/game1.jpg',
      alt: 'Descripción del juego 1',
      title: 'Proyecto 1: Plataformas 2D',
      description: 'Desarrollo de un juego de plataformas en 2D con mecánicas de salto, combate y exploración.',
      link: 'https://www.ejemplo.com/game1',
      button: 'Ver Proyecto',
    },
    {
      image: '/images/game2.jpg',
      alt: 'Descripción del juego 2',
      title: 'Proyecto 2: Puzzle Game',
      description: 'Creación de un juego de rompecabezas con niveles desafiantes y una historia envolvente.',
      link: 'https://www.ejemplo.com/game2',
      button: 'Ver Proyecto',
    },
    {
        image: '/images/game3.jpg',
        alt: 'Descripción del Juego 3',
        title: 'Proyecto 3: Juego de Carreras',
        description: 'Desarrollo de un juego de carreras con diferentes pistas y opciones de personalización de vehículos.',
        link: 'https://www.ejemplo.com/game3',
        button: 'Ver Proyecto',
    },
      
  ];


    return (
        <div class="max-w-auto items-center justify-center text-center mx-auto py-10 px-4">
            <h2 class="text-white text-5xl pb-4 font-bebas-neue text-shadow-lg/30">Mi Experiencia</h2>
            <p class="">Aquí te presento algunos de mis trabajos para diversos clientes:</p>
            <GridTarjetas items={proyectosProfesionales} />

        </div>
       
       
    )
}

export default Profesional;