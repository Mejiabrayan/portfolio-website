import { PortableTextBlock } from "sanity";

export type Blog = {
    category: string;
    date: string;
    _id: string;
    createdAt: Date;
    title: string;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
    author:string;
    code: string;
}