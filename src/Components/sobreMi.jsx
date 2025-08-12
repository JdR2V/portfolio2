import MySkills from "./skills.jsx";

function SobreMi(){

    const mySkills = [
        {
            image: '/logos/html.svg',
            alt: 'HTML',
            title: 'HTML',
            description: 'Markup language for creating web pages.',
        },
        {
            image: '/logos/css.svg',
            alt: 'CSS',
            title: 'CSS',
            description: 'Style sheet language for describing the presentation of a document.',
        },
        {
            image: '/logos/javascript.svg',
            alt: 'JavaScript',
            title: 'JavaScript',
            description: 'Programming language for web development.',
        },
        {
            image: '/logos/react.svg',
            alt: 'React',
            title: 'React.js',
            description: 'JavaScript library for building user interfaces.',
        },
        {
            image: '/logos/tailwind.svg',
            alt: 'Tailwind CSS',
            title: 'Tailwind CSS',
            description: 'Utility-first CSS framework for rapid UI development.',
        },
        {
            image: '/logos/wordpress2.svg',
            title: 'Wordpress',
            description: 'CMS para crear paginas web con plugins',
        },
        {
            image: '/logos/unity.svg',
            title: 'Unity Engine',
            description: 'Cross-platform game engine for creating 2D and 3D games.',
        },
        {
            image: '/logos/unreal.svg',
            title: 'Unreal Engine',
            description: 'Powerful game engine for creating high-quality games.',
        },
        {
            image: '/logos/blender.svg',
            title: 'Blender',
            description: 'Software gratuito y Open Source para crear modelados y animaciones 3D.',
        },
        {
            image: '/logos/git.svg',
            title: 'Git',
            description: 'Web-based UI/UX design tool.',
        },
        {
            image: '/logos/github.svg',
            title: 'GitHub',
            description: 'Platform for version control and collaboration.',
        },
        {
            image: '/logos/adobe.svg',
            title: 'Adobe CC',
            description: 'Adobe CC Suite.',
        },
    ];


    return (
            
        <div className="max-w-auto text-center">
            <h2 className="text-white text-7xl font-dm-sans text-shadow-lg/30">Sobre Mi</h2>
            <p className="p-4 lg:text-2xl text-lg">Hola, soy un desarrollador web apasionado por la creación de experiencias digitales atractivas y funcionales. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. Otra de mis pasiones es desarollar video juegos, sobretodo participar en Game Jams!</p>
            <p className="pb-14 lg:text-2xl text-lg">Con mas de 5 años de experiencia desarrollando para web, he tenido el privilegio de tabajar en equipo y en proyectos de manera individual con resultados increibles y enriquecedores.</p>
            <p className="pb-14 lg:text-2xl text-lg">Tengo experiencia en el uso de herramientas y tecnologia como:</p>
            <MySkills skills={mySkills} className="flex"/>
        </div>
        
    )
}

export default SobreMi;