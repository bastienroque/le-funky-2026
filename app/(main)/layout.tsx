import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
