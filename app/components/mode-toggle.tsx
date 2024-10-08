"use client";

import { Button } from "./ui/button";
import { SunIcon } from "@radix-ui/react-icons";
import { LampCeiling, MoonStarIcon } from 'lucide-react';

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 fixed top-10 right-10 z-10"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <LampCeiling className="h-[1.2rem] w-[1.2rem] text-[#000]"  size={60} color="#fff"/>
      ) : (
        <MoonStarIcon className="h-[1.2rem] w-[1.2rem] text-dark text-neutral-800" size={60} />
      )}
    </Button>
  );
}
