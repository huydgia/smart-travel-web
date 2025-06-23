"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from "react-i18next";
import Container from "./ui/container";

const footerLinks = [
  {
    title: "Về chúng tôi",
    links: [
      { name: "Giới thiệu", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Nghề nghiệp", href: "#" },
      { name: "Truyền thông", href: "#" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { name: "Trung tâm trợ giúp", href: "#" },
      { name: "Liên hệ chúng tôi", href: "#" },
      { name: "Chính sách bảo mật", href: "#" },
      { name: "Điều khoản sử dụng", href: "#" },
    ],
  },
  {
    title: "Tải ứng dụng",
    links: [
      {
        name: (
          <span className="flex items-center gap-2">
            <FaGooglePlay size={16} /> Ứng dụng Android
          </span>
        ),
        href: "#",
      },
      {
        name: (
          <span className="flex items-center gap-2">
            <FaAppStoreIos size={16} /> Ứng dụng Apple
          </span>
        ),
        href: "#",
      },
    ],
  },
];

export function FooterLayout() {
    const { t } = useTranslation();
    
  return (
    <footer className="
  bg-zinc-100 dark:bg-zinc-900
  px-4 sm:px-6 md:px-10
  py-4 sm:py-6 md:py-10
  text-xs sm:text-sm
  text-gray-600 dark:text-gray-300
  sm:relative z-10
">
      <Container>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* About / Intro */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">ViTravel</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Nền tảng hỗ trợ du khách khám phá Việt Nam một cách thuận tiện và đầy cảm hứng.
          </p>

          {/* Social media */}
          <div className="flex space-x-3 mt-4">
  <Link href="#"><Facebook size={18} /></Link>
  <Link href="#"><Instagram size={18} /></Link>
  <Link href="#"><Youtube size={18} /></Link>
</div>

        </div>

        {/* Navigation links */}
        {footerLinks.map((section, i) => (
          <div key={i} className="hidden md:block">
            <h4 className="font-semibold text-zinc-700 dark:text-white">{t(section.title)}</h4>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    href={link.href}
                    className="hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Language/Country Switcher */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-zinc-600 dark:text-zinc-200 mr-4">Ngôn ngữ</h4>
          <LanguageSwitcher />
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Quốc gia: Việt Nam
        </div>
      </div>
      {/* Copyright */}
      <div className="text-[11px] mt-8 pt-4 sm:text-xs text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-zinc-700">
        {/* border-t border-gray-200 dark:border-zinc-700 mt-10 pt-6 text-center text-xs text-gray-500 dark:text-gray-400 */}
        © {new Date().getFullYear()} ViTravel. Được phát triển với cảm hứng từ Tripadvisor.
      </div>
      </Container>
    </footer>
  );
}