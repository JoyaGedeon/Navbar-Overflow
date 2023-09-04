import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export type User = {
    name: string;
    email: string;
}

export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>> ;
}

/**  
 * First Way
 */
const defaultUser = {
    user: {
        name: '',
        email: '',
    },
    setUser: (user: User) => {}
} as UserContextInterface

export const UserContext = createContext(defaultUser);

/**  
 * Second Way
 */
// export const UserContext = createContext<Partial<UserContextInterface>>({});

type UserProviderProps = {
    children: ReactNode;
} 

const UserProvider = ({children}: UserProviderProps) => {
    const [user, setUser] = useState<User>({
        name: '',
        email: ''
    });

    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default UserProvider;
