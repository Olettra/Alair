import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4 text-center text-xs text-muted">
      <div className="flex items-center justify-center gap-3">
        <Link href="/privacy" className="hover:text-ochre transition-colors">
          privacy policy
        </Link>
        <span aria-hidden="true" className="text-muted/50">
          |
        </span>
        <Link href="/terms" className="hover:text-ochre transition-colors">
          terms of service
        </Link>
      </div>
    </footer>
  );
}
