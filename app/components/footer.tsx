import Link from "next/link";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.56a8.21 8.21 0 0 0 4.76 1.52V6.69h-1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-8 sm:flex-row sm:px-12">
      <Link href="/" className="font-serif text-xl">
        alik
      </Link>
      <div className="flex items-center gap-3">
        <a href="https://www.instagram.com/discover_alik/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-muted transition-colors duration-200 hover:text-text">
          <InstagramIcon />
        </a>
        <a href="https://www.tiktok.com/@discover_alik" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-text-muted transition-colors duration-200 hover:text-text">
          <TikTokIcon />
        </a>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/blog" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text">
          Blog
        </Link>
        <a href="#" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text">
          Privacy
        </a>
        <a href="#" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text">
          Terms
        </a>
        <Link href="/contact" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text">
          Contact
        </Link>
      </div>
    </footer>
  );
}
