function Contact(){
    return (
        <div>
            <h2 className="text-white text-5xl font-dm-sans text-shadow-lg/30">Contact</h2>
            <p>Let's chat! If you want to know more about what I do, send me a message to keep in contact</p>
            
          <form className="space-y-4 max-w-xl mx-auto px-4 py-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Writte your message here" className="w-full p-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
          </form>
        </div>
    )
}

export default Contact;