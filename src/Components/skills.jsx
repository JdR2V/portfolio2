function MySkills ({ skills }){
    return (
        <div className="max-w-screen-lg mx-auto flex flex-row justify-center">
            
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((item, index) => (
                    <div key={index} className="rounded-lg overflow-hidden transition duration-300">
                        <img src={item.image} alt={item.alt} className="w-20 h-20 object-cover" />
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MySkills;