import "./styles/global.css"

import { Header } from "./components/Header";
import { Card } from "./components/Card";


export default function App() {
  return (
    <div>
      <Header userFirstName="Abner" userLastName="Lourenço" userPhotoProfile="perfil.jpg"/>
      <Card imagePath="income.svg" operationType="Total Entradas" value="R$ 4.245,00"/>
      <Card imagePath="expense.svg" operationType="Total Saídas" value="R$ 2.543,00"/>
      <Card imagePath="total.svg" operationType="Total Geral" value="R$ 1.702,00"/>
    </div>
  )
}