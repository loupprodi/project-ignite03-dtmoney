import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

/**
 * Por que um componente renderiza?
 *
 * -Hooks changed (mudou, estado, contexto, reducer)
 * -Props changed (mudou prpriedades)
 * -parent rerendered (componente pai renderizou)
 *
 * Qual o fluxo de renderização?
 * 1 - O react recria o html da interface daquele compoenente
 * 2 - compara a versão do HTML reacriando a versão anterior
 * 3 - se mudou alguma coisa, ele reescreve o HTML na tela
 *
 *
 * Memo:
 * 0 - hooks changed, props, changed (deep comparison)
 * 0.1 - comparar com a versão anterior dos hooks e props
 * 0.2 - se mudou algo, ele vai permitir a nova renderização
 */

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query);
  };
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      {/* on submit devido ao form */}
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
