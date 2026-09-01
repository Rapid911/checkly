import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Checkly — Simple checklists. Better follow-through.", description: "A fast, calm checklist workspace." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
