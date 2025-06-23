'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      {/* Login card */}
      <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left: Image & slogan */}
        <div className="hidden md:flex w-1/2 bg-cover bg-center items-center justify-center">
          <div className="w-full text-center text-black dark:text-white">
            {/* <h2 className="text-3xl font-bold mb-2">Smart Travel Assistant</h2>
            <p className="text-lg">Tìm nơi ăn chơi, nghỉ dưỡng thông minh!</p> */}
            <img
              src="././images/pic2.png"
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Login form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo light theme */}
          <img
            src="././images/logo.png"
            alt="Smart Travel Assistant Logo"
            className="mx-auto mb-2 h-16 w-auto block dark:hidden"
          />
          {/* Logo dark theme */}
          <img
            src="././images/dark-logo.png"
            alt="Smart Travel Assistant Logo"
            className="mx-auto mb-2 h-16 w-auto hidden dark:block"
          />
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Đăng nhập</h1>
          <div className="space-y-4">
            <Input 
              className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md bg-background placeholder:text-muted-foreground" 
              type="email" 
              placeholder="Email" />
            <Input 
              className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md bg-background placeholder:text-muted-foreground" 
              type="password" 
              placeholder="Mật khẩu" />
            <Button className="w-full h-10 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors dark:bg-amber-600 dark:hover:bg-amber-700">Đăng nhập</Button>
            <div className="flex justify-between text-sm text-muted-foreground mt-4">
              <Link href="/forgot-password" className="hover:underline">Quên mật khẩu?</Link>
            </div> 
            {/* Divider */}
            <div className="flex items-center gap-4 my-2">
              <Separator className="flex-1 h-[1px] bg-gray-200 dark:bg-gray-700" />
              <span className="text-sm text-gray-500 whitespace-nowrap">hoặc đăng nhập bằng</span>
              <Separator className="flex-1 h-[1px] bg-gray-200 dark:bg-gray-700" />
            </div>
            
            <div className="flex gap-4 mt-4">
              <Button variant="outline" className="flex items-center justify-center w-1/2 gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <FcGoogle size={20} />
                <span className="text-sm font-medium">Google</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center w-1/2 gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <FaFacebook size={20} color="#1877F2" />
                <span className="text-sm font-medium">Facebook</span>
              </Button>
            </div>
            
          </div>

          <div className="flex justify-start text-sm text-muted-foreground mt-4">
            Chưa có tài khoản?
            <Link href="/signup" className="pl-1 hover:underline">Đăng ký</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
