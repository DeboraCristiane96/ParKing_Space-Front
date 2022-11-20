export default class StorageService {
    
    //chama e seta o item do local storage
    setItem(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key){
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    removeItem(key){
        localStorage.removeItem(key);
    }
}