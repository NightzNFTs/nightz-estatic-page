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
        className="fixed bottom-14 -right-12 md:-left-16"
      >
        <div className="w-[400px] md:w-[700px]">
          <Image
            priority
            src="/follow.png"
            width={900}
            height={900}
            alt="Picture of the author"
            className="w-full h-full"
          />
        </div>
      </Link>
    </section>
  );
}
