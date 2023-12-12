import { createContext, useState } from "react";
import { AuthContextValue, MyComponentProps } from "../types/type";
import auth from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext<AuthContextValue>(null!);

const AuthProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<undefined | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        // logout,
        // resetPassword,
        // updateUserEmail,
        // updateUserPassword,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
