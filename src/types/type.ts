export interface MyComponentProps {
  children: React.ReactNode;
}

export interface AuthContextValue {
  currentUser: undefined | null;
  signup: (email: string, password: string) => void;
}
