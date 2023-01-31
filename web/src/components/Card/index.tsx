import "./styles.css"

interface CardProps {
    operationType: string;
    imagePath: string;
}

export function Card(props: CardProps) {
   return ( 
    <div className="Card-container">
        <h3>
            <span>{props.operationType}</span>
            <img src={props.imagePath} alt="Imagem de saídas" />
        </h3>

        <p id="expenseDisplay">R$ 0,00</p>
    </div>
   )
}