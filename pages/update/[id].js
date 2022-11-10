import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Editor, Input, TextArea } from "../../components";
export default function Update({ blog }) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");
  const route = useRouter();
  useEffect(() => {
    setTitle(blog.title);
    setSlug(blog.slug);
    setSummary(blog.summary);
    setAuthor(blog.author);
    setArticle(blog.content);
  }, []);
  async function saveBlog(e) {
    e.preventDefault();
    const content = article;
    const date = new Date().toLocaleDateString("en-GB");
    try {
      await axios.patch(`/api/blogs/${blog._id}`, {
        title,
        slug,
        summary,
        author,
        content,
        date,
      });
      route.push("/menage");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="p-8 font-[Inter]">
      <header className="flex justify-between">
        <Link className="text-sm text-blue-600 underline" href="/menage">
          Menage Blogs
        </Link>
        <Button>Logout</Button>
      </header>
      <main className="flex gap-4 mt-4">
        <section className="w-[65%] text-sm text-slate-600">
          {/* <Editor article={blog.content} /> */}
          <TextArea
            rows={17}
            placeholder="content"
            label="Content"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          />
        </section>
        <form onSubmit={saveBlog} className="flex flex-col gap-4 w-[35%]">
          <Input
            type="text"
            placeholder="title"
            label="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="slug"
            label="Slug"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <TextArea
            placeholder="summary"
            label="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <Input
            type="text"
            placeholder="author"
            label="Author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <div>
            <Button type="submit">Update Blog</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.BASE_URL}/api/blogs`);
  const data = await response.data;
  const paths = data.map((blog) => ({
    params: {
      id: blog._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `${process.env.BASE_URL}/api/blogs/${params.id}`
  );
  const blog = response.data;
  return {
    props: {
      blog,
    },
  };
}
