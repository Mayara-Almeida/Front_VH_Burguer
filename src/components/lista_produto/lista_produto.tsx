import styles from "./lista_produto.module.css"
import CardProduto from "../card-produto/card-produto";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

const Lista_Produto = () => {
    return (
        <>
            <div className={`${styles.container} layout_guide`}>
                <div id={styles.botoes_home}>
                    <button className={styles.botao}>
                        Filtrar
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
                    <div id={styles.botoes_direita}>
                        <button className={styles.botao}>Todas as promoções</button>
                        <button className={styles.botao}>Adicionar produtos</button>
                    </div>
                </div>
                <div id={styles.cards_produtos}>
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>
            </div>
        </>
    )
}
export default Lista_Produto;