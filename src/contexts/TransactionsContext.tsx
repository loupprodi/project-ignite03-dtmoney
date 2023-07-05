import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Transaction {
  id: number;
  description: string;
  type: "outcome" | "income";
  price: number;
  category: string;
  createdAt: string;
}
interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
