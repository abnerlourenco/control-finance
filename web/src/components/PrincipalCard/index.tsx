import "./styles.css"

import leftChange from "../../../public/angle-left.svg"
import rightChange from "../../../public/angle-right.svg"

interface CardProps {
    value: string;
    value2: string;
    value3: string;
}
//tentar colocar os valores em um unico card
// a informação da conta
// Periodo em evidencia
export function PrincipalCard(props: CardProps) {
   return ( 
    <div className="principalCard-container">
        <div className="month-select">
            <button>
                <img src={leftChange} alt="" />
            </button>
            <div>Fevereiro 2023</div>
            <button>
                <img src={rightChange} alt="" />
            </button>
        </div>
        <h3>
            <span>Receita Mensal</span>
            <p id="expenseDisplay">{props.value}</p>
        </h3>
        <h3>
            <span>Despesa Mensal</span>
            <p id="expenseDisplay">{props.value2}</p>
        </h3>
        <h3>
            <span>Saldo geral</span>
            <p id="expenseDisplay">{props.value3}</p>
        </h3>

    </div>
   )
}