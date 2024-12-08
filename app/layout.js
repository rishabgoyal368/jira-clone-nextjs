import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import HeaderComponent from "@/components/custom/HeaderComponent";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Variable } from "lucide-react";

const intern = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jira",
  description: "Project Management Tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: shadesOfPurple,
      variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "#1a202c",
        colorInputBackground: "#2D3748",
        colorInputText: "#F3F4F6",
      },
      elements: {
        formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
        card: "bg-gray-800",
        headerTitle: "text-blue-400",
        headerSubtitle: "text-gray-400",
      },
    }}>
      <html lang="en">
        <body className={`${intern.className} animated-dotted-background`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <HeaderComponent />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gray-900  py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Footer</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
