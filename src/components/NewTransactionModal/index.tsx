import * as Dialog from "@radix-ui/react-dialog";
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Descricao" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <TransactionType>
              <TransactionTypeButton variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>

              <TransactionTypeButton variant="outcome">
                <ArrowCircleDown size={24} />
                Saida
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Cadastrar</button>
            {/* <button type="submit">cadastrar</button> */}
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
};
