import { getBlog } from "../../../../sanity/schemas/sanity-utils";
import LargeHeading from "@/components/ui/LargeHeading";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { typewriter } from "@/lib/staticImages";
import { Button } from "@/components/ui/Button";
import CodeBlock, { CustomPortableTextComponent } from "@/components/CodeBlock";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {
  params: {
    blog: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return {
    title: blog.title,
  };
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  const formatDate = (date: string) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US");
  };

  return (
    <section className="px-4 py-12 mx-auto max-w-screen-md text-center">
      <div className="relative h-60 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md mx-auto mb-8">
        <Image
          src={typewriter}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>

      <LargeHeading size="md" className="mb-4">
        <Balancer>{blog.title}</Balancer>
      </LargeHeading>

      <div className="text-gray-500 text-sm mb-8">
        <div>by {blog.author}</div>
        <div>{formatDate(blog.date)}</div>
      </div>

      <div
        className={cn(
          "prose max-w-none tracking-tight leading-tighter text-left mb-8",
          openSans.className
        )}
      >
        <PortableText
          value={blog.content}
          components={CustomPortableTextComponent}
        />
      </div>

      <div className="my-8">
        <Button variant={"outline"}>
          <Link href="/blogs">Back to Blog</Link>
        </Button>
      </div>
    </section>
  );
}
