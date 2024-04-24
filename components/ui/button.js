import React from "react";

export default function Button({ text }) {
  return (
    <button className="px-4 py-2 md:px-8 md:py-4 outline outline-blue-600 bg-blue-600 hover:bg-transparent hover:text-slate-600  uppercase rounded-md ">
      {text}
    </button>
  );
}
