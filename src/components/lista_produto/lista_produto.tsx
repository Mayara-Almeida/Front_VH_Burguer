import styles from "./lista_produto.module.css"
import CardProduto from "../card-produto/card-produto";

const Lista_Produto = () => {
    return (
        <>
            <div>
                <button>Filtrar</button>
                <div>
                    <button>Todas as promoções</button>
                    <button>Adicionar produtos</button>
                </div>
            </div>
            <CardProduto />
            {/* <div className={styles.cards}>
            <CardProduto />
            <CardProduto />
            <CardProduto />
            </div> */}
        </>
    )
}
export default Lista_Produto;