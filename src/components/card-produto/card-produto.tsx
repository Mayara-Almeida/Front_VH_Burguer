import styles from "./card-produto.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardProduto = () => {
    return (
        <>
            <article id={styles.cardProduto}>
                <div className={styles.produto_img_nome}>
                    <img src="../imgs/HamburguerAlcatraComBacon.png" alt="Hambúrguer artesanal com pão brioche dourado, carne grelhada alta, queijo derretido, bacon crocante, alface fresca, tomate e cebola roxa, servido sobre uma tábua de madeira com uma faca ao lado." id={styles.imagem_produto} />
                    <h3>Monster</h3>
                </div>
                <p id={styles.descricao}>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
                <div id={styles.parte_inferior}>
                    <p>R$ 35,00</p>
                    <div className={styles.campo_icones}>
                        <img src="../imgs/info.png" alt="Ícone circular amarelo com a letra “i” no centro, representando informação." className={styles.icone} />
                        <img src="../imgs/editar.svg" alt="Ícone laranja no formato de um lápis compapel, representando editar." className={styles.icone} />
                        <img src="../imgs/trash.svg" alt="Ícone laranja no formato de uma lixeira, representando excluir." className={styles.icone} />
                    </div>
                </div>
            </article>
        </>
    )
}

export default CardProduto;