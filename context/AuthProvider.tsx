import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import {} from "@supabase/supabase-js";
import { supabaseAdmin } from "../utils/supabase";
import { useRouter } from "next/router";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>();
  const router = useRouter();
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
  const uploadTweet = async (imageSrc: string) => {
    await supabaseAdmin.from("images").insert({
      name: user?.user_metadata.name,
      username: user?.user_metadata.user_name,
      imageSrc,
      href: `https://twitter.com/${user?.user_metadata.user_name}`,
    });
  };

  useEffect(() => {
    !supabaseAdmin.auth.user() && router.replace("/");
    supabaseAdmin.auth.onAuthStateChange(() => {
      setUser(supabaseAdmin.auth.user());
    });
  }, []);

  const value = { user, loginWithTwitter, signOut, uploadTweet };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
