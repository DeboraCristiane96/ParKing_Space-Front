import ApiService, {LOGGED_USER, TOKEN} from './ApiService';
import StorageService from './StorageService';

export class AuthenticationApiService extends ApiService {

    constructor(){

        super('');
        //cria um storage
        this.storageService = new StorageService();
        const token = this.storageService.getItem(TOKEN);
        this.registerToken(token);
    }

    // Authentication - Função assíncrona
    async login(email, password){
        const userDetails = {
            email,
            password,
             "email": email,
             "password": password
        };
        //fazer a requisiçãp para o login, pegar o token e armazenar no storageService
        return this.post("/login", userDetails)

            .then((response) => {
                const user = response.data.user;
                const token = response.data.token;

                this.storageService.setItem(
                    TOKEN,
                    token
                );
                this.storageService.setItem(LOGGED_USER, user);
                this.registerToken(token);

                return user;
            })
            .catch(error=>null);


    }
    
    //Checa se o token é válido
    isTokenValid(token){
      return this.post('/isTokenValid', token);
     }

    async isValidToken() {
        return this.post("/isValidToken", {
                token: this.storageService.getItem(TOKEN),
                user: this.storageService.getItem(LOGGED_USER)
            })
            .then((response) => {
                return response.data.valid;
            })
            .catch((error) => false);
    }
    
    //Remove os dados do usuário
    logout(){
        this.storageService.removeItem(LOGGED_USER);
        this.storageService.removeItem(TOKEN);
        
        return this.post('/logout');
    }

    //Retorna o usuário logado armazenado no storageService
    getLoggedUser(){
        return this.storageService.getItem(LOGGED_USER);
    }
    
    //Retorna o token armazenado no storageService
    getToken(){
        return this.storageService.getItem(TOKEN);
    }

    //Pega o usuário logado e o token do storageService e envia o token para a api para checar se é válido
    async isAuthenticated(){
        const user = this.getLoggedUser();
        const token = this.getToken();

        if (!user || !token){
            return false;
        }

        const tokenDTO = {
            "token": token
        }

        const response = await this.isTokenValid(tokenDTO);
        return response.data;
    }
//ele vaio token no axios como o heard Authorization
    registerToken(token) {
        if(token) {
            this.httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }


}

export default AuthenticationApiService