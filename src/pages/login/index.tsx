import { Fragment } from "react/jsx-runtime";
import styles from "./login.module.css"

// ESTRUTURA PADRÃO!
const Login = () => { // Constante com o nome da página chamada
    return ( // Aplicar tags necessárias para criar a tag Login, todas com um "pai" que é a tag <> e </>
        <>
            <main id={styles.main}>
                <img src="../imgs/hamburguer_login.png" alt="Hambúrguer “desmontado” com ingredientes flutuando (pão, carne, queijo, bacon, picles, tomate, cebola e alface) sobre fundo vermelho escuro."/>
                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form action="" id={styles.formulario}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required />
                        </div>
                        <a href="" id={styles.esqueceu_senha}>Esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Login; // Exporta Login para onde quiser usar 