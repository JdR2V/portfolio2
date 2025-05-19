function MySkills ({ skills }){
    return (
        <div className="">
            
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2 pl-15 sm:pl-15 md:pl-35 lg:pl-40">
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