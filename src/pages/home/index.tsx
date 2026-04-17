import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./home.module.css"

const Home = () => {
    return (
        <>
            <Header />
            <main id={styles.main}>

                <section id={styles.banner}>
                    <div className={`${styles.container_banner} layout_guide`}>
                        <h1>BEM-VINDO AO VH BURGUER</h1>
                            <img src="../imgs/foto_de_hamburgueres.png" alt="Três hambúrgueres artesanais com cheddar, bacon, vegetais e molho barbecue sobre fundo branco." />
                            <div id={styles.botoes}>
                                <button id={styles.btn_atendente}>Chamar a atendente</button>
                                <button id={styles.btn_cardapio}>Ver cardápio</button>
                            </div>
                        </div>
                </section>

                <section id={styles.destaques}></section>

                <section id={styles.cardapio}>
                    <h1>Cardápio</h1>
                    {/* Chamar componente da lista */}
                </section>

                <section id={styles.unidades}></section>

            </main>
            <Footer />
        </>
    )
}
export default Home;