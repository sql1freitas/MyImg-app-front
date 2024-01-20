'use client'

import { Template } from "@/components/Template"
import { ImageCard } from "@/components/ImageCard"
import { Image } from "@/resources/image/image.resource"
import { useImageService } from "@/resources/image/image.service"
import { useState } from 'react'

export default function GaleriaPage(){
    
    const useService = useImageService();
    const[images, setImages] = useState<Image[]>([])
    const[name, setName] = useState<string>('')
    const[loading, setLoading] = useState<boolean>(false)
    


     async function searchImages() {
        setLoading(true)
        const result = await useService.buscar(name)
        setImages(result || []);
        setLoading(false)
        
    }
    
    

    function renderImageCard(image: Image){
        return(
            <ImageCard 
            nome={image.name} 
            src={image.url} 
            tamanho={image.size} 
            dataUpload={image.uploadDate}
            extension={image.extension}/>
            
        )
    }

    function renderImageCards(){
        return images.map(renderImageCard)
    }

return(

    <Template loading={loading}>
          
        <section className="flex flex-col items-center justify-center my-5">
            <div className="flex space-x-4">

                <input type="text" onChange={event => {setName(event.target.value);
                searchImages();}}
                 className="border px-5 py-2 rounded-lg text-gray-900" />

                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-300" onClick={searchImages}>Buscar</button>
                <button className="bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-cyan-600">Adicionar nova</button>
              
            </div>

        </section>



        <section className="grid grid-cols-4 gap-8">
            
           {
             renderImageCards()
           }
            


        </section>
  
    


    </Template>
)
}