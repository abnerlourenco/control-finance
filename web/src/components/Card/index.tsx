import "./styles.css"

interface CardProps {
    operationType: string;
    imagePath: string;
    value: string;
}

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