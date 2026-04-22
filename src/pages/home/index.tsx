import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Lista_Produto from "@/components/lista_produto/lista_produto";
import styles from "./home.module.css"

const Home = () => {
    return (
        <>
            <Header />
            <main>

                { /* -----------------------------SEÇÃO BANNER--------------------------------- */}
                <section id={styles.banner}>
                    <div className={`${styles.container_banner} layout_guide`}>
                        <h1>bem-vindo ao vh burguer</h1>
                        <img src="../imgs/foto_de_hamburgueres.png" alt="Três hambúrgueres artesanais com cheddar, bacon, vegetais e molho barbecue sobre fundo branco." />
                        <div id={styles.botoes}>
                            <button className={styles.btn_atendimento}>Chamar a atendente</button>
                            <button className={styles.btn_cardapio}>Ver cardápio</button>
                        </div>
                    </div>
                </section>

                { /* -----------------------------SEÇÃO DESTAQUES--------------------------------- */}
                <section id={styles.destaques}>
                    <div className={`${styles.container_destaques} layout_guide`}>
                        <article className={styles.card_mais_pedidos}>
                            <p>Os queridinhos da galera</p>
                            <p className={styles.nome_card}>mais pedidos</p>
                        </article>
                        <div id={styles.cards_direita}>
                            <article className={styles.card_muito_bacon}>
                                <p>Lanches com</p>
                                <p className={styles.nome_card}>muito bacon</p>
                            </article>
                            <article className={styles.card_super_combos}>
                                <p>Se tiver muita fome</p>
                                <p className={styles.nome_card}>super combos</p>
                            </article>
                        </div>
                    </div>
                </section>

                { /* -----------------------------SEÇÃO CARDÁPIO--------------------------------- */}
                <section id={styles.cardapio}>
                    <div className={`${styles.container_cardapio} layout_guide`}>
                        <h2>cardápio</h2>
                        {/* chamar componente da lista */}
                        <Lista_Produto />
                    </div>
                </section>

                { /* -----------------------------SEÇÃO UNIDADES--------------------------------- */}
                <section id={styles.unidades}>
                    <div className={`${styles.container_unidades} layout_guide`}>
                        <div className={styles.texto_unidades}>
                            <h2>unidades</h2>
                            <ul className={styles.lista_unidades}>
                                <li>Centro - Av. Aurora, 742</li>
                                <li>Jardim - Av. das Palmeiras, 1280</li>
                                <li>Norte - Av. Horizonte, 305</li>
                                <li>Sul - Av. Nova Esperança, 910</li>
                            </ul>
                        </div>  
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
export default Home;