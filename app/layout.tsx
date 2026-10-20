import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Spec-Checked — GCSE revision, checked against the specification',
    template: '%s — Spec-Checked',
  },
  description:
    'Depth-first GCSE revision. Every page states which specification version it was checked against, and when.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        {/* 2.4.1 Bypass Blocks */}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <header className="site-header">
          <div className="site-header__inner">
            <a href="/" className="brand">
              Spec-Checked
            </a>
            <nav aria-label="Main">
              {/* 3.2.6 Consistent Help — same position on every page */}
              <a href="/accessibility">Accessibility</a>
            </nav>
          </div>
        </header>

        <main id="main" tabIndex={-1}>
          {children}
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <p className="small" style={{ margin: 0 }}>
              Independent study resource. Not affiliated with or endorsed by AQA,
              Pearson Edexcel, OCR or WJEC/Eduqas.
            </p>
            <p className="small" style={{ margin: 0 }}>
              No accounts. No tracking. Progress stays in your browser.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
