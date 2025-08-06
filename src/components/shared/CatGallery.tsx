'use client';

import { useEffect, useState } from "react"; 
import { Button } from "@/components/ui/button"; // Supondo que o botão esteja funcionando

interface Cat {
  id: string;
  url: string | null; // Permite que a URL seja null ou string
}

const CatGallery = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0); 
  const [loading, setLoading] = useState(true);  

  const fetchCats = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data: Cat[] = await response.json();
      console.log(data); 
      if (response.ok) {
        setCats(data);
      } else {
        console.error("Erro ao carregar dados da API:", data);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const nextCat = () => {
    console.log("Botão próximo clicado!");  
    setCurrentIndex((prevIndex) => prevIndex + 1) //aqui foi alterado para atualizar o estado currentIndex para o seu valor anterior incrementado em 1.
  };
  const prevCat = () => {
    if (cats.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cats.length) % cats.length); // Vai para a imagem anterior
  };

  return (
    <div className="flex flex-col items-center space-y-4">
    <h1 className="text-2xl font-bold">Galeria de Gatos</h1>

    {loading ? (
      <div>Loading...</div>
    ) : (
      <div className="w-full max-w-md mx-auto">
        <div className="border rounded-lg p-4 shadow-lg">
          
          <img
            src={cats[currentIndex]?.url || '/placeholder.png'}
            alt="Cat"
            className="w-full h-auto"
          />
        </div>
      </div>
    )}

    
    <div className="flex space-x-4 mt-4">
      <Button
        variant="outline"    
        size="sm"
        onClick={prevCat}
        disabled={loading || cats.length === 0}
      >
        Anterior
      </Button>
      <Button
        variant="outline"    
        size="sm"
        onClick={nextCat}
        disabled={loading || cats.length === 0}
      >
        Próximo
      </Button>
    </div>
  </div>
);
};
export default CatGallery;

