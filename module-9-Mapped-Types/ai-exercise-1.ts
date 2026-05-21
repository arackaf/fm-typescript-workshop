type DbUser = {
  id: number;
  name: string;
  createdAt: Date;
  update: (newFields: Partial<DbUser>) => void;
  delete: () => void;
};

export {};
