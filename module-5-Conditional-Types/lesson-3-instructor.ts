// Slides: https://docs.google.com/presentation/d/1yzXQjRFV7gmHR06ZXdvvRdRC2RSnzaB2dp45L6SOkjw/edit?usp=sharing

type Channel = "email" | "sms" | "push";

type PayloadFor<T extends Channel> = T extends "email"
  ? { subject: string; body: string }
  : T extends "sms"
  ? { text: string }
  : T extends "push"
  ? { title: string; message: string }
  : never;

type EmailPayload = PayloadFor<"email">;
//   ^?

type SmsPayload = PayloadFor<"sms">;
//   ^?

type EmailOrSmsPayload = PayloadFor<"email" | "sms">;
//   ^?

// Shut it off

type PayloadForNoDistributing<T extends Channel> = [T] extends ["email"]
  ? { subject: string; body: string }
  : [T] extends ["sms"]
  ? { text: string }
  : [T] extends ["push"]
  ? { title: string; message: string }
  : never;

type EmailPayload2 = PayloadForNoDistributing<"email">;
//   ^?

type SmsPayload2 = PayloadForNoDistributing<"sms">;
//   ^?

type EmailOrSmsPayload2 = PayloadForNoDistributing<"email" | "sms">;
//   ^?

export {};
