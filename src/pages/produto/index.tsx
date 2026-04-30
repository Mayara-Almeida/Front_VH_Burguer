import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./produto.module.css"
import { useEffect, useState } from "react";
import { cadastrarCategoria, listarCategoria } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";
import { erro, notificacao } from "@/utils/toast";
import Toast from "@/components/toast/toast";

interface Categoria{ // O nome de cada atributo tem que estar igual na api
  categoriaId: number,
  nome: string
}

const Produto = () => {
  
  // Informações que o usuário passou pelo front e que precisamos passar para a api
  const[nome, setNome] = useState<string>("");
  const[descricao, setDescricao] = useState<string>("");
  const[preco, setPreco] = useState<string>("");
  const[imagem, setImagem] = useState<File | null>(null);
  const[categoriasSelecionadas, setCategoriasSelecionadas] = useState<number[]>([]);

  /* Listar as categorias vindo da api */
  const[categorias, setCategorias] = useState<Categoria[]>([]);

  async function listarCategoriaEmProduto(){
    const lista = await listarCategoria();

    setCategorias(lista.data);
    console.log(lista.data);
  }

  async function Cadastrar(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try{
        const dados = {
          nome,
          descricao,
          preco,
          imagem,
          categoriasId: categoriasSelecionadas
        }
        await cadastrarProduto(dados);
        notificacao("Produto cadastrado!");

    }catch(error: any){
      erro(error.message);
    } 
  }

  // Quando o produto for renderizado, a função listarCategoriaEmProduto acontece
  useEffect(() => {
    listarCategoriaEmProduto(); 
  }, [])

  
  return (
    <>
    <Toast/>
      <SubHeader />
      <main className={styles.main_produto}>
        <section className={`${styles.section_flex} layout_guide`}>
            <h1>Criar produto</h1>
            <form className={styles.formulario_produto} onSubmit={Cadastrar}>
              <div className={styles.campo_form}>
                <label htmlFor="">Nome do produto</label>
                <input type="text" 
                value={nome} onChange={(e) => setNome(e.target.value)}/>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Descrição</label>
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Preço(R$)</label>
                <input type="text" 
                value={preco} onChange={(e) => setPreco(e.target.value)}/>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Categoria</label>
                <select multiple onChange={(e) => setCategoriasSelecionadas(
                Array.from(e.target.selectedOptions).map((option) => Number(option.value))
              )}>
                  {categorias.map((item) => ( /* Mapeando a lista de categorias para que cada opção receba um item da lista */
                    <option value={item.categoriaId} key={item.categoriaId}>{item.nome}</option>
                    
                  )
                )}
                </select>

                <a href="">Criar categoria</a>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Imagem do produto</label>
                <input
                  type="file"
                  onChange={(e) => {
                    if(e.target.files && e.target.files[0]) // Verificando se o files existe e se o primeiro índice está sendo preenchido
                    setImagem(e.target.files[0]);
                  }}
                />
              </div>
              <button type="submit" id={styles.btn_salvar}>Salvar</button>
            </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Produto;