import "./styles.css"

interface CardProps {
    operationType: string;
    imagePath: string;
    value: string;
}
//tentar colocar os valores em um unico card
// a informação da conta
// Periodo em evidencia
export function Card(props: CardProps) {
   return ( 
    <div className="card-container">
        <h3>
            <span>{props.operationType}</span>
            <img src={props.imagePath} alt="Imagem de saídas" />
        </h3>

        <p id="expenseDisplay">{props.value}</p>
    </div>
   )
}