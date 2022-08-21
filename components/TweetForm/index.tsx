import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";

export default function TweetForm() {
  const { handleSubmit, register, reset } = useForm();
  const { uploadTweet } = useAuth();

  return (
    <form
      onSubmit={handleSubmit((e) => {
        uploadTweet(e.imgURL);
        reset();
      })}
      className="border-[1px] border-solid bg-white border-slate-700 rounded-lg w-2/3 flex flex-col p-8 justify-between h-48 items-center"
    >
      <div className="flex flex-col justify-center w-1/2">
        <label htmlFor="imgURL">Photo URL</label>
        <input
          id="imgURL"
          type="text"
          {...register("imgURL")}
          className="border-[1px] border-solid border-slate-700 rounded-lg p-1 bg-slate-50 outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 font-bold uppercase text-sm px-3 py-2 rounded-lg text-white hover:bg-green-700 active:scale-95 transition-all"
      >
        Add Photo
      </button>
    </form>
  );
}
