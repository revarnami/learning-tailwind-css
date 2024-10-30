import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul className="flex flex-row bg-black">
        <li>
          <div className="p-4">
            <Link className="text-white text-xs tablet:text-xl desktop:text-5xl" href='/colors'>Color</Link>
            <Link className="text-white text-xs tablet:text-xl desktop:text-5xl" href='/colors'>Typography</Link>
          </div>
        </li>
      </ul>
    </>
  );
}
