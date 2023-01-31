import "./styles/global.css"

import { Header } from "./components/Header";
import { Card } from "./components/Card";


export default function App() {
  return (
    <div>
      <Header userFirstName="Abner" userLastName="Lourenço" userPhotoProfile="perfil.jpg"/>
      <Card imagePath="income.svg" operationType="Total Entradas"/>
      <Card imagePath="expense.svg" operationType="Total Saídas"/>
      <Card imagePath="total.svg" operationType="Total Geral"/>
    </div>
  )
}