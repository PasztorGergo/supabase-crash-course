import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import {} from "@supabase/supabase-js";
import { supabaseAdmin } from "../utils/supabase";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>();
  const loginWithTwitter = useCallback(async () => {
    const { user, session, error } = await supabaseAdmin.auth.signIn({
      provider: "twitter",
    });
    user && setUser(user);
  }, []);
  const signOut = useCallback(async () => {
    const { error } = await supabaseAdmin.auth.signOut();
  }, []);

  const value = { user, loginWithTwitter, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
