import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer"
import styles from "./produto.module.css"

const Produto = () => {
    return (
        <>
            <SubHeader />
            <main className={styles.main_produto}>
                <section className={`${styles.container_produto} layout_guide`}>
                    <div className={styles.titulo}>
                        <h1>Criar Produto</h1>
                    </div>
                    <form id={styles.formulario}>
                        <div className={styles.campo_form}>
                            <label htmlFor="nome">Nome do produto</label>
                            <input type="text" name="nome" placeholder="BBQ Especial" required />
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="descricao">Descrição</label>
                            <input type="text" name="descricao" placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada." required />
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="preco">Preço (R$)</label>
                            <input type="number" name="preco" placeholder="40,00" step="0.01" required />
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="categoria">Categoria</label>
                            <input list="lista" name="categoria" placeholder="Selecione a categoria" defaultChecked />
                            <datalist id="lista">
                                <option value="Artesanal">Artesanal</option>
                                <option value="Vegano">Vegano</option>
                                <option value="Vegetariano">Vegetariano</option>
                            </datalist>
                        </div>
                        <a href="">Adicionar categoria</a>

                        <div className={styles.campo_form}>
                            <label htmlFor="imagem">URL da imagem</label>
                            <input type="url" name="imagem" placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-" required />
                        </div>

                        <button className={styles.botao}>Salvar</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Produto;