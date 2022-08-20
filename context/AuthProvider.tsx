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
  const loginWithTwitter = async () => {
    const { user, session, error } = await supabaseAdmin.auth.signIn(
      {
        provider: "twitter",
      },
      {
        redirectTo: "http://localhost:3000",
        //redirectTo: "https://supabase-gallery-delta.vercel.app",
      }
    );
  };
  const signOut = async () => {
    const { error } = await supabaseAdmin.auth.signOut();
  };
  const uploadTweet = async (tweetURL: string) => {
    await supabaseAdmin.from("images").insert({});
  };

  useEffect(() => {
    setUser(supabaseAdmin.auth.user());
  }, []);

  const value = { user, loginWithTwitter, signOut, uploadTweet };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
