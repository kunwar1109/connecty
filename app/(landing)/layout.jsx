import { Header } from "./_components/header";

export default function LandingLayout({ children }) {
  return (
    <div className="h-full">
      <Header />
      <main>{children}</main>
    </div>
  );
}
