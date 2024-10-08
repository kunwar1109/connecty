import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function LandingLayout({ children }) {
  return (
    <section className="h-full flex flex-col w-full">
      <Header />
      <main className="flex items-center justify-center flex-1">
        {children}
      </main>
      <Footer />
    </section>
  );
}
