import Link from "next/link";
import { MdOutlineKitchen } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="p-4 font-bold text-2xl">
        <Link href="/">Vad blir det för mat?</Link>
      </h1>
      <ul className="p-4">
        <li className="font-semibold">
          <Link href="pantry">
            <MdOutlineKitchen size={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
