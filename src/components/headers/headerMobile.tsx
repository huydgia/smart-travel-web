'use client';

import { Menu, User } from "lucide-react";
import { Input } from "../common/input";
import Logo from "../common/logo";
import { useState } from "react";
import SearchFullScreen from "../searchFullScreen";

export function HeaderMobile({
  isScrolled,
  onMenuToggle,
}: {
  isScrolled: boolean;
  onMenuToggle: () => void;
}) {
  const [showSearchFullScreen, setShowSearchFullScreen] = useState(false);
  
  return (
    <>
      {/* Overlay toàn màn hình khi mở search */}
      {showSearchFullScreen && (
        <SearchFullScreen onClose={() => setShowSearchFullScreen(false)} />
      )}
      <div className="flex items-center justify-between h-16 px-2 gap-2">
        {/* Hamburger */}
        <button onClick={onMenuToggle}>
          <Menu size={22} />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0 mt-2">
          <Logo />
        </div>

        {/* Search bar giữa nếu scroll */}
        {isScrolled && (
          <div className="flex-1 mx-1">
            <Input 
              showIcon={true}
              inputSize="fullscreen"
              onClick={() => setShowSearchFullScreen(true)}  
            />
          </div>
        )}

        {/* User Icon */}
        <User className="text-gray-800 dark:text-white flex-shrink-0" size={22} />
      </div>
    </>
  );
}