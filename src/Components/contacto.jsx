function Contacto(){
    return (
        <div>
            <h2 className="text-white text-5xl font-dm-sans text-shadow-lg/30">Contacto</h2>
            <p>Si quieres saber mas sobre lo que hago, enviame un mensaje para estar en contacto.</p>
            
          <form className="space-y-4 max-w-xl mx-auto px-4 py-4">
            <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Correo" className="w-full p-2 border rounded" />
            <textarea placeholder="Escribe tu mensaje aqui" className="w-full p-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
          </form>
        </div>
    )
}

export default Contacto;