type Channel = "email" | "sms" | "push";

type PayloadFor<T extends Channel> = T extends "email"
  ? { subject: string; body: string }
  : T extends "sms"
  ? { text: string }
  : T extends "push"
  ? { title: string; message: string }
  : never;

export {};
