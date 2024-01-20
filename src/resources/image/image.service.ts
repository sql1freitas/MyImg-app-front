import { Image } from "./image.resource";

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async buscar(name:string = ""): Promise<Image[]> {
        const url = `${this.baseURL}?name=${name}`
        const response = await fetch(url);
        return await response.json();
    }
}



export const useImageService = () => new ImageService();    