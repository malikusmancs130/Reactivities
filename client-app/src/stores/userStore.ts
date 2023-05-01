import { makeAutoObservable, runInAction } from "mobx";
import { UserFormValue} from "../app/models/user";
import agent from "../app/api/agent";
import { store } from "./store";
import { User } from "../app/models/user";
import { router } from "../router/Routes";

export default class userStore {
    user: User | null=null;

    constructor(){
        makeAutoObservable(this)
    }

    get isLogedIn() {
        return !!this.user;
    }

    login = async (creds:UserFormValue) => {
        try {
            const user = await agent.Accounts.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(()=>this.user=user);
           router.navigate('/activities')
           store.modalStore.closeModal();
        }
         catch (error) {
            throw error;
        }
    }
    
    register = async (creds:UserFormValue) => {
        try {
            const user = await agent.Accounts.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(()=>this.user=user);
           router.navigate('/activities')
           store.modalStore.closeModal();
        }
         catch (error) {
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        this.user=null;
        router.navigate('/');
    }

    getUser = async() => {
        try {
            const user = await agent.Accounts.current();
            runInAction(()=> this.user=user);
        } catch (error) {
            console.log(error);
        }
    }

    setImage = (image:string) => {
        if(this.user) this.user.image=image;
    }
}