import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul className="flex flex-row bg-black">
        <li>
          <div className="p-4">
            <Link className="text-white text-xs tablet:text-xl desktop:text-5xl" href='/colors'>Color</Link>
          </div>
        </li>
        <li>
          <div className="p-4">
            <Link className="text-white text-xs tablet:text-xl desktop:text-5xl" href='/typography'>Typography</Link>
          </div>
        </li>
      </ul>
    </>
  );
}
