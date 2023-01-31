import "./style.css"

interface HeaderProps {
    userFirstName: string;
    userLastName: string;
    userPhotoProfile: string;
}

export function Header(props: HeaderProps) {
    return (
        <header className="header-container">
            <a href="/">
                <img className="logo" src="logo-cinza.svg" alt="Logo" />
            </a>
            <div className="user">
                <div>
                    <p>Olá,</p>
                    <p>{props.userFirstName} {props.userLastName}</p>
                </div>

                <div className="perfil">
                    
                    <img className="img-perfil" src={props.userPhotoProfile} alt="" />
                </div>
            </div>
            

        </header>
    )
}