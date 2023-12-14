export interface MyComponentProps {
  children: React.ReactNode;
}

export interface AuthContextValue {
  currentUser: TUser | undefined;
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  resetPassword: (email: string) => void;
  updateUserEmail: (email: string) => void;
  updateUserPassword: (password: string) => void;
}

export type TUser = {
  email: string;
  password: string;
};

export type TRef = React.RefObject<HTMLInputElement>;
