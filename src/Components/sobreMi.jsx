import MySkills from "./skills.jsx";

function SobreMi(){

    const mySkills = [
        {
            image: 'src/assets/images/logos/html.svg',
            alt: 'HTML',
            title: 'HTML',
            description: 'Markup language for creating web pages.',
        },
        {
            image: 'src/assets/images/logos/css.svg',
            alt: 'CSS',
            title: 'CSS',
            description: 'Style sheet language for describing the presentation of a document.',
        },
        {
            image: 'src/assets/images/logos/javascript.svg',
            alt: 'JavaScript',
            title: 'JavaScript',
            description: 'Programming language for web development.',
        },
        {
            image: 'src/assets/images/logos/react.svg',
            alt: 'React',
            title: 'React.js',
            description: 'JavaScript library for building user interfaces.',
        },
        {
            image: 'src/assets/images/logos/tailwind.svg',
            alt: 'Tailwind CSS',
            title: 'Tailwind CSS',
            description: 'Utility-first CSS framework for rapid UI development.',
        },
        {
            image: 'src/assets/images/logos/wordpress2.svg',
            title: 'Wordpress',
            description: 'JavaScript library for 3D graphics on the web.',
        },
        {
            image: 'src/assets/images/logos/unity.svg',
            title: 'Unity Engine',
            description: 'Cross-platform game engine for creating 2D and 3D games.',
        },
        {
            image: 'src/assets/images/logos/unreal.svg',
            title: 'Unreal Engine',
            description: 'Powerful game engine for creating high-quality games.',
        },
        {
            image: 'src/assets/images/logos/blender.svg',
            title: 'Blender',
            description: 'JavaScript library for 3D graphics on the web.',
        },
        {
            image: 'src/assets/images/logos/git.svg',
            title: 'Git',
            description: 'Web-based UI/UX design tool.',
        },
        {
            image: 'src/assets/images/logos/github.svg',
            title: 'GitHub',
            description: 'Platform for version control and collaboration.',
        },
        {
            image: 'src/assets/images/logos/adobe.svg',
            title: 'Adobe CC',
            description: 'Adobe CC Suite.',
        },
    ];


    return (
            
        <div class="max-w-auto text-center">
            <h2 class="text-white text-5xl font-bebas-neue text-shadow-lg/30">Sobre Mi</h2>
            <p className="p-4">Hola, soy un desarrollador web apasionado por la creación de experiencias digitales atractivas y funcionales. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. Otra de mis pasiones es desarollar video juegos, sobretodo participar en Game Jams!</p>
            <p className="p-4">Estas son algunas de las tecnologias que manejo:</p>
            <MySkills skills={mySkills} />
        </div>
       
        
    )
}

export default SobreMi;