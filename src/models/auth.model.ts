export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string
}

// interface to show how the context is goint to look like
export interface AuthContextProps {
    authState: AuthState,
    login: () => void, 
    logout: () => void,
    changeFavIcon: ( iconName: string ) => void,
    setUsername: (userName: string) => void
}

// type for children or childrens depending on our needs
export interface ChildrenProps {
    children: JSX.Element
}