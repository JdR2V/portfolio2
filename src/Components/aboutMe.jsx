import MySkills from "./skills";

function AboutMe(){
    
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
            description: 'CMS for building websites with plugins.',
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
            description: 'Free and Open Source 3D modeling and animation software.',
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
            <h2 className="text-white text-5xl font-dm-sans text-shadow-lg/30">About me</h2>
            <p>Hi! I'm a web developer with a passion to make new digital and interactive experiences. I love learning about new technologies and hone my skills. I'm also very much in love with working in gamedev, specially participating in Game Jams.</p>
            <p className="p-4">These are some of the software/languages I can work with:</p>
           <MySkills skills={mySkills} />
        </div>
    )
}

export default AboutMe;