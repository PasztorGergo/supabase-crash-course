import { NextPage } from "next";
import Head from "next/head";
import { TweetForm } from "../components";
import { useAuth } from "../context/AuthProvider";

const Profile: NextPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>{user?.user_metadata.name.split(" ")[0]}'s Profile</title>
      </Head>
      <main>
        <section className="flex flex-col items-center justify-center mt-12">
          <h2 className="font-bold text-xl capitalize">Add new tweet</h2>
          <TweetForm />
        </section>
      </main>
    </>
  );
};

export default Profile;
