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
    error && console.error(error.message);
  };
  const signOut = async () => {
    const { error } = await supabaseAdmin.auth.signOut();
  };
  const uploadTweet = async (imageSrc: string) => {
    if (
      //@ts-ignore
      (await supabaseAdmin.from("images").select("username")).data?.filter(
        (x) => x.username == user.user_metadata.user_name
      ).length < 5
    ) {
      await supabaseAdmin.from("images").insert({
        name: user?.user_metadata.name,
        username: user?.user_metadata.user_name,
        imageSrc,
        href: `https://twitter.com/${user?.user_metadata.user_name}`,
      });
    } else {
      console.log("You can't inset more images");
    }
  };

  useEffect(() => {
    supabaseAdmin.auth.onAuthStateChange(() => {
      setUser(supabaseAdmin.auth.user() ?? {});
    });
  }, []);

  const value = { user, loginWithTwitter, signOut, uploadTweet };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
