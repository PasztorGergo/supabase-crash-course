import { NextPage } from "next";
import Head from "next/head";
import { TweetForm } from "../components";
import { useAuth } from "../context/AuthProvider";

const Profile: NextPage = () => {
  const { user, signOut } = useAuth();
  return (
    <>
      <Head>
        <title>{user?.user_metadata.name.split(" ")[0]}'s Profile</title>
      </Head>
      <main>
        <section className="flex flex-col items-center justify-center mt-12">
          <h2 className="font-bold text-xl capitalize">Add new photo</h2>
          <TweetForm />
          <button
            onClick={signOut}
            className="rounded-lg mt-4 bg-red-600 text-white font-bold text-sm uppercase px-3 py-2"
          >
            Sign Out
          </button>
        </section>
      </main>
    </>
  );
};

export default Profile;
