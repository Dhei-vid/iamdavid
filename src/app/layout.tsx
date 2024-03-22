"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/splash-screen/splashScreen";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState<boolean>(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishedLoading={() => setIsLoading(false)} />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
