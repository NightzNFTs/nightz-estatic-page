import Title from "@/components/elements/title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="p-4 xl:pl-20">
        <Title>COMING</Title>
        <Title>SOON!</Title>
      </div>

      <Link
        href="https://twitter.com/NightzNFTs"
        target="_blank"
        className="fixed bottom-0 left-[-70px] ml-[-10] mb-10"
      >
        <Image
          priority
          src="/follow.png"
          width={700}
          height={500}
          alt="Picture of the author"
        />
      </Link>
    </section>
  );
}
