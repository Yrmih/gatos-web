import CatGallery from "@/components/shared/CatGallery";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-[family-name:var(--font-geist-sans)]">
     
      
      <header className="w-full text-center bg-green-800 text-white p-4">
        <h1 className="text-2xl font-bold">Carrosel dos Gatos</h1>
      </header>
      
      
      <main className="flex-grow flex justify-center items-center">
        <h2></h2>
        <CatGallery />
      </main>
      
      
      <footer className="w-full text-center bg-green-800 text-white p-4">
        <p>&copy; 2025 Meu Site. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
