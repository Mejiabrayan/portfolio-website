import { createClient, groq } from 'next-sanity';
import { Project } from '../../types/project';
import { Blog } from '../../types/blogs';
import clientConfig from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
_id,
_createdAt,
title,
"slug": slug.current,
"image": image.asset->url,
content,
date,
_type == "code" => {
  "code": @.code,
  "language": @.language
}
    }`
  );
}



export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      author,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content[],
      date,
      _type == "code" => {
        "code": @.code,
        "language": @.language
      }
    }`,
    { slug }
    
  )
}
