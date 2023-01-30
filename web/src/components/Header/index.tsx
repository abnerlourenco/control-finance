import "./../Header/style.css"

export function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="logo" src="logo-cinza.svg" alt="Logo" />
            </a>

            <div className="perfil">
                <img className="img-perfil" src="perfil.jpg" alt="" />
            </div>

        </header>
    )
}