import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);

        this.account = new Account(this.client); 
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name); 

            if (userAccount) {
                // Call another method if needed, like createSession
                return await this.login({email,password});
            } else {
                return null;
            }
        } catch (error) {
            console.log("Appwrite  service:: CreateAccount::error",error)
            return null;
        }

    }
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch(error){
            console.log("Appwrite  service:: loginUser::error",error)
            return null;
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get(); 
        }
        catch(error){
            console.log("Appwrite  service:: getCurrentUser::error",error)
        }
        return null;
    } 
    async logout(){
        try{
            await this.account.deleteSessions('current');
        }
        catch(error){
            console.log("Appwrite sercice:: logout :: error",error)
        }
    }
}

const authService = new AuthService();
export default authService;
