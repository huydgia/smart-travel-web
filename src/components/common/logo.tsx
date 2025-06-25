'use client';

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" title="Home">
      <Image
        src= "/images/logo-croped.png"
        alt="SmartTravel Assistant Logo"
        width={140}
        height={20}
        className="object-contain w-[100px] sm:w-[120px] md:w-[140px] h-20"
        priority
      />
    </Link>
  );
}