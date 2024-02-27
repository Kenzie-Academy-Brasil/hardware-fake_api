type Category =
  | "Todos"
  | "Processador"
  | "Placa Mãe"
  | "Memória"
  | "Placa de Vídeo"
  | "SSD"
  | "Fonte"
  | "Gabinete"
  | "Disco Rígido Interno (HD)";

type Hardware = {
  id: number;
  name: string;
  category: Category;
  price: number;
  brand: string;
};

export { Hardware, Category };
