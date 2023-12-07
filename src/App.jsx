import { useState } from 'react'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <section className="flex flex-col items-center space-y-8">
          <img
            alt="App Logo"
            className="mb-4 rounded-full w-52 h-52"
            height="100"
            src="../public/827343b3-2f11-4316-b658-aac290bfc671.jpg"
            width="100"
            style={{ aspectRatio: '100 / 100', objectFit: 'cover' }}
          />
          <h1 className="text-5xl font-bold">NAVE ESPACIAL</h1>
          <p className="text-center text-gray-900 md:text-xl lg:text-base xl:text-xl">
            Vive una experiencia épica en el mundo de un galaga, lleno de naves espaciales, disparos láser y batallas intergalácticas. ¡Descárgalo ahora y comienza tu aventura en el espacio!
          </p>

          <button
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-black transition-colors rounded ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-15 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 hover:from-yellow-600 hover:via-red-600 hover:to-purple-600"
            id="0x8bf5s0tnai"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            Download Now
          </button>
        </section>
        <section className="mt-16">
          <h2 className="mb-8 text-5xl font-bold text-center">Requisitos del sistema</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6 bg-gray-100">
                <h3 className="text-xl font-bold text-center">Mínimos</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 list-disc list-inside">
                  <li>OS: Windows 8, 8.1, 32-bit</li>
                  <li>Processor: Intel Core i3 or AMD a6-4400m</li>
                  <li>Memory: 4 GB RAM</li>
                  <li>Graphics: 2.70 ghz</li>
                  <li>Storage: 10 GB available space</li>
                </ul>
              </div>
            </div>
            <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6 bg-gray-100">
                <h3 className="text-xl font-bold text-center">Recomendados</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 list-disc list-inside">
                  <li>OS: Windows 10, 11, 64-bit</li>
                  <li>Processor: Intel Core i7-4770K or AMD Ryzen 5 1500X</li>
                  <li>Memory: 12 GB RAM</li>
                  <li>Graphics: NVIDIA GeForce GTX 1060 or AMD Radeon RX 480</li>
                  <li>Storage: 20 GB available space</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="mb-4 text-4xl font-bold text-center">Capturas de pantalla</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <img
              alt="Game screenshot 1"
              className="rounded-lg"
              height="200"
              src="../public/Inicio.jpg"
              width="300"
              style={{ aspectRatio: '300 / 200', objectFit: 'cover' }}
            />
            <img
              alt="Game screenshot 2"
              className="rounded-lg"
              height="200"
              src="../public/juego.jpg"
              width="300"
              style={{ aspectRatio: '300 / 200', objectFit: 'cover' }}
            />
            <img
              alt="Game screenshot 3"
              className="rounded-lg"
              height="200"
              src="../public/juego1.jpg"
              width="300"
              style={{ aspectRatio: '300 / 200', objectFit: 'cover' }}
            />
            <img
              alt="Game screenshot 4"
              className="rounded-lg"
              height="200"
              src="../public/fin.jpg"
              width="300"
              style={{ aspectRatio: '300 / 200', objectFit: 'cover' }}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
