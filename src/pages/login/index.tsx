import { Fragment } from "react/jsx-runtime";
import styles from "./login.module.css"
import { useState } from "react";
import { login } from "../api/authService";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

// ESTRUTURA PADRÃO!
const Login = () => { // Constante com o nome da página chamada
    // obriga o input do email a ter o value e onChange, que servem para verificar o email antes mesmo que o usuário termine de digitar
    // o email armazena, e o setEmail modifica, ou seja, toda vez que um email for digitado, ele vai substituir o anterior 
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => toast(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        // impede a página de recarregar enquanto usuário está digitando
        e.preventDefault();
        try{
            await login(email, senha);
            notificacao("Login bem sucedido!");
            setTimeout(() => {
                router.push("/home")
            }, 2000); // depois de 2 segundos
        }catch(error: any){
erro(error.message);
        }

    }

    // onSubmit = quando o usuário enviar, vai começar a verificação

    return ( // Aplicar tags necessárias para criar a tag Login, todas com um "pai" que é a tag <> e </>
        <>
                <ToastContainer/>
            <main id={styles.main}>
                <img src="../imgs/hamburguer_login.png" alt="Hambúrguer “desmontado” com ingredientes flutuando (pão, carne, queijo, bacon, picles, tomate, cebola e alface) sobre fundo vermelho escuro." />
                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form action="" id={styles.formulario} onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required
                                value={senha} onChange={(e) => setSenha(e.target.value)} />
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