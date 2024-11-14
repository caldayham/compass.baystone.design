// components/Navbar.tsx
import { Bell, Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  title?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

export default function Navbar({ 
  title = "Compass", 
  showSearch = true,
  searchPlaceholder = "Search..."
}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/compass-icon.svg"
                alt="Compass Logo"
                width={32}
                height={32}
                priority
              />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            )}
            <Link 
              href="/notifications" 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Link>
            <Link 
              href="/settings" 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}