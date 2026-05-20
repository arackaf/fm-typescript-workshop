type DbUser = {
  id: number;
  name: string;
  createdAt: Date;
};

type SerializeDates<T> = never;

type SerializedDbUser = SerializeDates<DbUser>;

export {};
