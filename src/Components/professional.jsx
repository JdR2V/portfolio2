import GridTarjetas from './GridTarjetas';

function Professional(){

     const professionalProyects = [
    {
      image: 'src/assets/images/Logo Insta.jpg',
      alt: 'Website 1',
      title: 'El Tataller Shop',
      description: 'Website for "El Tataller", serves as an online shopping portal, built with WordPress/WooCommerce.',
      link: 'https://eltataller.shop',
      button: 'See Project',
    },
    {
      image: 'src/assets/images/codepen.png',
      alt: 'Code Pen Projects',
      title: 'Code Pen',
      description: 'Here you can find the works I have done on Code Pen focused on web utilities.',
      link: 'https://codepen.io/Juan-Rubio',
      button: 'See Projects',
    },
    {
        image: 'src/assets/images/freecodecamp.png',
        alt: 'Certifications',
        title: 'My Certifications',
        description: 'Here you can find my certifications from courses and training I have completed.',
        link: 'https://www.linkedin.com/in/juan-daniel-rubio/details/certifications/',
        button: 'See Certifications',
    },
      
  ];

    return (
        <div className="max-w-auto items-center justify-center text-center mx-auto py-10 px-4">
            <h2 class="text-white text-5xl pb-4 font-bebas-neue text-shadow-lg/30">My experience</h2>
            <p class="">Here are some works I've done for different clients:</p>
            <GridTarjetas items={professionalProyects} />

        </div>
    )
}

export default Professional;