import { http } from "./config";

export default {
  salvar: receita => {
    return http.post("addReceita", receita);
  },

  atualizar: receita => {
    return http.put(receita);
  },

  listar: () => {
    return http.get("getReceitas");
  },

  apagar: receita => {
    return http.delete("receita", { data: receita });
  }
};
