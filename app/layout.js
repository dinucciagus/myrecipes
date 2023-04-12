import "../styles/globals.css";
import Header from "@/components/Header";
export const metadata = {
  title: "Recipes",
  description: "Save and search for recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
