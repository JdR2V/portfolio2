function GridTarjetas({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-2">
      {items.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition duration-300 bg-white">
          <img src={item.image} alt={item.alt} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-700 text-base">{item.description}</p>
          <div className="flex flex-col justify-center mt-4"> 
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-500 hover:text-blue-700">
              {item.button}
            </a>
            <a href={item.link2} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-500 hover:text-blue-700">
              {item.button2}
            </a>
           </div> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridTarjetas;