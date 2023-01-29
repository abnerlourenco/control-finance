import "./../Header/style.css"

export function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="logo" src="logo.svg" alt="Logo" />
            </a>
            
            <div className="navbar">
                <div>
                    <a href="/">Geral</a>
                </div>
                <div>
                    <a href="/">Dashboards</a>
                </div>
            </div>

            <div className="perfil">
                <img className="img-perfil" src="perfil.jpg" alt="" />
            </div>

        </header>
    )
}