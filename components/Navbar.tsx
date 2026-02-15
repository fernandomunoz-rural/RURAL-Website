"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CircleUserRound,
  LayoutPanelTop,
  Mail,
  Menu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "About", href: "#about", icon: CircleUserRound },
  { label: "Platform", href: "#platform", icon: LayoutPanelTop },
  { label: "Products", href: "#products", icon: Boxes },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  return (
    <header className="relative z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 w-full items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg px-1 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            <Image
              src="/rural-technologies-logo.png"
              alt="RURAL Technologies logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-contain"
              priority
            />
            <span className="text-sm font-semibold tracking-[0.08em] text-zinc-100">RURAL Technologies</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-purple-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  <Icon className="h-4 w-4 text-zinc-500" />
                  {item.label}
                </Link>
              );
            })}
          </div>


          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-100 hover:bg-white/10 hover:text-purple-100 focus-visible:ring-purple-300 md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="border-white/10 bg-zinc-950/95 backdrop-blur-xl">
              <div className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-base text-zinc-200 transition-colors hover:bg-white/5 hover:text-purple-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                      >
                        <Icon className="h-4 w-4 text-zinc-500" />
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              <div className="mt-6">
                <SheetClose asChild>
                  <Button
                    className="w-full bg-purple-500 text-white transition-colors hover:bg-purple-400 focus-visible:ring-purple-300"
                  >
                    <a href="#request-demo" className="inline-flex items-center justify-center gap-2">
                      Request demo
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
