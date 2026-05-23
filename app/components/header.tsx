import { HowItWorks } from "./how-it-works";
import { Earn } from "./earn";
import { Contact } from "./contact";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-end">
      <nav aria-label="Primary" className="flex items-center gap-2">
        <HowItWorks />
        <Earn />
        <Contact />
      </nav>
    </header>
  );
}
