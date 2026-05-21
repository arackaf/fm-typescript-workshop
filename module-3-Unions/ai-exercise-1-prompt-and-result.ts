// prompt: add a type discriminator to these types

type AnonymousUser = {
  TYPE: "ANONYMOUS";
  loginUrl: string;
};

type LoadingUser = {
  TYPE: "LOADING";
  message: string;
};

type AuthenticatedUser = {
  TYPE: "AUTHENTICATED";
  id: number;
  name: string;
  email: string;
};

type ExpiredSessionUser = {
  TYPE: "EXPIRED_SESSION";
  expiredAt: Date;
  loginUrl: string;
};

type LockedOutUser = {
  TYPE: "LOCKED_OUT";
  reason: string;
  unlockAt?: Date;
};

type AuthState =
  | AnonymousUser
  | LoadingUser
  | AuthenticatedUser
  | ExpiredSessionUser
  | LockedOutUser;

export {};
