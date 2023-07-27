import { getBlog } from "../../../../sanity/schemas/sanity-utils";
import LargeHeading from "@/components/ui/LargeHeading";
import { PortableText } from "@portabletext/react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { typewriter } from "@/lib/staticImages";
import { Button } from "@/components/ui/Button";

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
    <section className="relative px-4 py-12 mx-auto max-w-screen-md text-center">
      <div className="relative h-96 rounded-lg overflow-hidden shadow-md mb-8">
        <Image
          src={typewriter}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>

      <div className="sm:text-center md:text-center lg:text-center">
        <LargeHeading size="md">
          <Balancer>{blog.title}</Balancer>
        </LargeHeading>
      </div>

      <div className="flex flex-col items-center text-gray-400 text-sm my-8">
        <div className="text-center">
          <div>by {blog.author}</div>
          <div>{formatDate(blog.date)}</div>
        </div>
      </div>

      <div
        className={cn(
          "prose max-w-none tracking-wide",
          openSans.className,
          "text-center"
        )}
      >
        <PortableText value={blog.content} />
      </div>

      <div className="text-center my-8">
        <Button variant={"outline"}>
          {" "}
          <Link href="/blogs">Back to Blog</Link>
        </Button>
      </div>
    </section>
  );
}
