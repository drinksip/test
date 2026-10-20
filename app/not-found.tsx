import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p className="lede">
        That topic is not published yet, or the address is wrong.
      </p>
      <p>
        <Link href="/" className="btn">
          Back to the home page
        </Link>
      </p>
    </>
  );
}
