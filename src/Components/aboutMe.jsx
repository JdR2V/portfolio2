import MySkills from "./skills";

function AboutMe(){
    
    const mySkills = [
        {
            image: 'src/assets/images/html.png',
            alt: 'HTML',
            title: 'HTML',
            description: 'Markup language for creating web pages.',
        },
        {
            image: 'src/assets/images/css.png',
            alt: 'CSS',
            title: 'CSS',
            description: 'Style sheet language for describing the presentation of a document.',
        },
        {
            image: 'src/assets/images/js.png',
            alt: 'JavaScript',
            title: 'JavaScript',
            description: 'Programming language for web development.',
        },
        {
            image: 'src/assets/images/react.png',
            alt: 'React',
            title: 'React.js',
            description: 'JavaScript library for building user interfaces.',
        },
        {
            image: 'src/assets/images/threejs.png',
            alt: 'Three.js',
            title: 'Three.js',
            description: 'JavaScript library for 3D graphics on the web.',
        },
    ];
    
    return (
        <div className="max-w-auto text-center">
            <h2 className="text-white text-5xl font-bebas-neue text-shadow-lg/30">About me</h2>
            <p>Hi! I'm a web developer with a passion to make new digital and interactive experiences. I love learning about new technologies and hone my skills. I'm also very much in love with working in gamedev, specially participating in Game Jams.</p>
            <h2 className="text-white text-5xl font-bebas-neue text-shadow-lg/30">Skills</h2>
            <p className="p-4">These are some of the software/languages I:</p>
           <MySkills skills={mySkills} />
        </div>
    )
}

export default AboutMe;