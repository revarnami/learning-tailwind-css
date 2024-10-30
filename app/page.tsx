import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul className="flex flex-row bg-black text-white">
        <li><Link href='/colors'>Color</Link></li>
      </ul>
    </>
  );
}
