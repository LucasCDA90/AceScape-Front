import {useEffect, useState} from "react";
import {User, user$} from "./User.ts";

export const useUserInfo = () => {
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        const sub = user$.subscribe(user => setUser(user));
        
        return () => {
            return sub.unsubscribe();
        }
    }, []);
    
    return user;
}
