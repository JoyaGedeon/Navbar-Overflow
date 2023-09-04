import ToggleProvider, { ToggleContext } from './contexts/navbarContext'
import { useContext } from 'react'
import './App.css'

const Navbar = () => {
    const { isToggle, setIsToggle } = useContext(ToggleContext);

    const openNavbar = () => {
        setIsToggle(!isToggle)
        let block = document.querySelector('.navbar-block') as HTMLElement;
        if (isToggle) {
            block.classList.add('navbar-toggled')
            console.log('toggled')
        } else {
            block.classList.remove('navbar-toggled')
            console.log('not toggled')
        }
    }

    return (
        <div
        //  style={
            // isToggle ? {overflowY: 'hidden'} : {overflowY: 'auto'}
            // }
            >
            <div style={{
                backgroundColor: 'rgb(16, 48, 190)',
                height: '10vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                gap: '80%',
                alignItems: 'center',
                // padding: '0 1rem',
                margin: '0',
                zIndex: '2',
                position: 'fixed',
            }}>
                <p>Navbar</p>
                <button style={{
                    backgroundColor: 'darkblue',
                    padding: '0.4rem 0.5rem',
                    borderRadius: '15px',
                }}
                onClick={(e) => openNavbar()}>
                    {
                        isToggle ? 'Close' : 'Open'
                    }
                </button>
            </div>
            <div className='navbar-block'>

            </div>
        </div>
    )
}

const OtherComponent = () => {
    return (
        <div>
            <h1>Other Component</h1>    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus eaque quas minima perferendis, modi pariatur.
                Minus incidunt officiis provident quidem dicta odit iste eaque 
                temporibus eum assumenda ad, reprehenderit sapiente!    
            </p>
        </div>
    )
}

const App = () => {
    const { isToggle, setIsToggle } = useContext(ToggleContext);

    return (
        <ToggleProvider>
            <div style={
                    isToggle ? {overflowY: 'hidden'} : {overflowY: 'auto'}
                    && 
                    {
                        // overflow: 'hidden',
                        height: 'auto',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly'
                    }
                }>
                <Navbar />
                <OtherComponent />
                <OtherComponent />
            </div>
        </ToggleProvider>
    )
}

export default App

{/* <AnotherComponents />
<UserDetails /> */}

// const UserDetails = () => {
//     const { user } = useContext(UserContext);
    
//     return (
//         <div>
//             <p>
//                 User Name: {user.name}
//             </p>
//             <p>
//                 User Email: {user.email}
//             </p>
//         </div>
//     )
// }

// const AnotherComponents = () => {
//     const { setUser } = useContext(UserContext);

//     useEffect(() => {
//         setUser ({
//             name: 'John Doe',
//             email: 'johndoe@gmail.com'
//         })
//     }, [])

//     return (
//         <div>
//             <h1 style={{textAlign: 'center', marginTop:'0'}}>
//                 Another Component.
//             </h1>
//         </div>
//     )
// }




