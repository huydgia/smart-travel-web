import Link from 'next/link';
import ThemeToggle from './themeToggle';
import Container from './ui/container';

export function HeadeLayout() {
  return (
    <header className="bg-white dark:bg-zinc-800 shadow px-4 md:px-10 py-3 sticky top-0 z-50">
       <Container>
<div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-600">
          SmartTravel
        </Link>

        {/* Menu */}
        <nav className="space-x-4">
          <Link href="#" className="hover:text-green-600">Địa điểm nổi bật</Link>
          <Link href="#" className="hover:text-green-600">Đăng nhập</Link>
        </nav>

        <ThemeToggle />
      </div>
       </Container>
        
    </header>
  );
}
