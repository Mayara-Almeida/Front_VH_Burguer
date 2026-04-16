// index.tsx -> Arquivo que vai ser renderizado inicialmente

import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(){
  return{
    redirect: { //Redirecionamento ao abrir o sistema
      destination: "/home", // Para a tela home
      permanent: false, // Não redirecionar sempre para a tela home mesmo com outras URLs
    },
  };
}

export default function Index(){
  return null;
}