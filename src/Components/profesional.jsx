import GridTarjetas from './GridTarjetas';

function Profesional(){

    const proyectosProfesionales = [
    {
      image: '/images/Logo Insta.jpg',
      alt: 'Pagina Web 1',
      title: 'El Tataller Shop',
      description: 'Pagina web de "El Tataller", funciona como portal de compras web, Hecho en Wordpress/Woo Commerce',
      link: 'https://eltataller.shop',
      button: 'Ver Proyecto',
    },
    {
      image: '/images/codepen.png',
      alt: 'Proyectos Code Pen',
      title: 'Code Pen',
      description: 'Aquí puedes encontrar los trabajos que he realizado en Code Pen enfocados a utilidades web.',
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
      
  ];

    return (
        <div className="max-w-auto items-center justify-center text-center mx-auto py-10 px-4 ">
            <h2 className="text-white text-5xl pb-4 font-dm-sans text-shadow-lg/30">Mi Experiencia</h2>
            <p>Aquí te presento algunos de mis trabajos para diversos clientes:</p>
            <GridTarjetas items={proyectosProfesionales} />

        </div>
       
       
    )
}

export default Profesional;