import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="p-4 font-bold text-2xl">
        <Link href="/">What to eat!?</Link>
      </h1>
      <ul className="p-4">
        <li className="font-semibold">
          <Link href="pantry">My pantry</Link>
        </li>
      </ul>
    </div>
  );
}
