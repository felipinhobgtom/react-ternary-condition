function Descontar(props){
    const temDesconto = props.desconto;
    const descontar = temDesconto ? "Desconto aplicado." : "Sem desconto."

    return(
        <h1>{descontar}</h1>
    )
}

export default Descontar