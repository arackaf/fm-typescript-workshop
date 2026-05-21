type AnonymousUser = {
  loginUrl: string;
};

type LoadingUser = {
  message: string;
};

type AuthenticatedUser = {
  id: number;
  name: string;
  email: string;
};

type ExpiredSessionUser = {
  expiredAt: Date;
  loginUrl: string;
};

type LockedOutUser = {
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
