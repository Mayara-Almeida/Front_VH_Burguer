import styles from "./sub-header.module.css"
import Link from "next/link";

const SubHeader = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                    <img src="../imgs/Logo_footer.svg" alt="Logo do VhBurguer que contém como plano de fundo um hambúrguer."/>
                    <Link href="./home" className={styles.link}>Voltar</Link>
                </div>
            </header>
        </>
    )
}
export default SubHeader;