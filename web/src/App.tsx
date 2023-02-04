import "./styles/global.css"

import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { PrincipalCard } from "./components/PrincipalCard";


export default function App() {
  return (
    <div>
      <Header userFirstName="Abner" userLastName="Lourenço" userPhotoProfile="perfil.jpg"/>
      <PrincipalCard value="R$ 3.702,00" value2="R$ 1.702,00" value3="R$ 2.000,00"/>
    </div>
  )
}