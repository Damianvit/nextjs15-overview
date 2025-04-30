import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Damian Vit | Portfolio",
    description: "Portfolio site built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-full m-0`}
            >
                <div className="flex flex-col min-h-screen">
                    <header className="bg-gray-800 text-white px-6 py-4 shadow-sm dark:bg-neutral-900">
                        <div className="max-w-5xl mx-auto flex justify-between items-center">
                            <h1 className="text-xl font-semibold">
                                Damian Vit
                            </h1>
                            <nav className="space-x-4 text-sm text-white dark:text-gray-200">
                                <a href="/" className="hover:underline">
                                    Home
                                </a>
                                <a href="/projects" className="hover:underline">
                                    Projects
                                </a>
                                <a href="/contact" className="hover:underline">
                                    Contact
                                </a>
                            </nav>
                        </div>
                    </header>

                    <main className="flex-1 px-6 py-10 max-w-5xl mx-auto w-full">
                        {children}
                    </main>

                    <footer className="bg-gray-800 text-white  px-6 py-4 text-center text-xs dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700">
                        © {new Date().getFullYear()} Your Name. All rights
                        reserved.
                    </footer>
                </div>
            </body>
        </html>
    );
}
