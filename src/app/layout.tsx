import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Footer } from "@/components/Footer/Footer";

const helveticaFont = localFont({ src: "../fonts/helvetica_regular.otf" });

export const metadata: Metadata = {
    title: "Protect Earth from asteroids",
    description: "Funny page as test task",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={helveticaFont.className}>
                <div className="wrapper">
                    <Header />
                    <div className="content">
                        <Sidebar />
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
