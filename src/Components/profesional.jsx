import GridTarjetas from './GridTarjetas';

function Profesional(){

    const proyectosProfesionales = [
    {
      /* image: '/images/Logo Insta.jpg',
      alt: 'Pagina Web 1',
      title: 'El Tataller Shop',
      description: 'Pagina web de "El Tataller", funciona como portal de compras web, Hecho en Wordpress/Woo Commerce',
      link: 'https://eltataller.shop',
      button: 'Ver Proyecto', */
      image: '/images/brush-export.png',
      alt: 'Selector de colores al azar',
      title: 'Random Color Palette',
      description: 'Aplicacion web que genera paletas de colores al azar, puedes copiar el código HEX o descargar la imagen.',
      link: 'https://newcolorpalette.netlify.app/',
      button: 'Ver Proyecto',
    },
    {  
        image: 'images/generator.png',
        alt: 'Generador de Ideas para Dibujos',
        title: 'Generador de Ideas para Dibujos',
        description: 'Una pequeña aplicacion web que genera ideas para dibujos al azar, ideal para artistas que buscan inspiración.',
        link: 'https://drawingideagenerator.netlify.app/',
        button: 'Ir al Generador',
    },
    {
      image: '/images/codepen.png',
      alt: 'Proyectos Code Pen',
      title: 'Code Pen',
      description: 'Aquí puedes encontrar las ideas que he realizado en Code Pen enfocados a utilidades web.',
      link: 'https://codepen.io/Juan-Rubio',
      button: 'Ver Proyectos',
    },
    {
        image: '/images/freecodecamp.png',
        alt: 'Certificaciones',
        title: 'Mis Certificaciones',
        description: 'Aquí puedes encontrar mis certificaciones de cursos y capacitaciones que he realizado.',
        link: 'https://www.linkedin.com/in/juan-daniel-rubio/details/certifications/',
        button: 'Ver Certificaciones',
    },
    {
        image: '/images/github.png',
        alt: 'GitHub',
        title: 'Mis Repositorios de GitHub',
        description: 'Si deseas conocer mas sobre mis trabajos personales, puedes verlos aquí.',
        link: 'https://github.com/JdR2V',
        button: 'Ir a GitHub',
    },
      
  ];

    return (
        <div className="max-w-auto items-center justify-center text-center mx-auto py-10 px-4 ">
            <h2 className="text-white text-7xl pb-4 font-dm-sans text-shadow-lg/30">Mi Experiencia</h2>
            <p className="p-4 lg:text-2xl text-lg">Aquí te presento algunos de mis trabajos para diversos clientes:</p>
            <GridTarjetas items={proyectosProfesionales} />

        </div>
       
       
    )
}

export default Profesional;