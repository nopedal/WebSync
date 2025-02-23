import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="text-center">
        Made by <Link href="https://github.com/nopedal" className="text-lime-200">@nopedal</Link>
      </div>
    </footer>
  );
}
