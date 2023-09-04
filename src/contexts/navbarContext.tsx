import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

// export type Toggle = {
//     toggle: boolean;
// }

export interface ToggleContextInterface {
    isToggle: boolean;
    setIsToggle: Dispatch<SetStateAction<boolean>> ;
}

/**  
 * First Way
 */
// const defaultToggle = {
//     isToggle: false,
//     setIsToggle: (toggle: Toggle) => {}
// } as ToggleContextInterface

export const ToggleContext = createContext<ToggleContextInterface>({
    isToggle: false,
    setIsToggle: () => {}
});

/**  
 * Second Way
 */
// export const UserContext = createContext<Partial<UserContextInterface>>({});

type ToggleProviderProps = {
    children: ReactNode;
} 

const ToggleProvider = ({children}: ToggleProviderProps) => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <div>
            <ToggleContext.Provider value={{ isToggle, setIsToggle }}>
                {children}
            </ToggleContext.Provider>
        </div>
    )
}

export default ToggleProvider;
