import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Editor, Input, TextArea } from "../../components";
export default function Create() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const route = useRouter();
  // fungsi untuk ngesave data yahh!!
  async function saveBlog(e) {
    e.preventDefault();
    const content = document.querySelector(".ProseMirror").innerHTML;
    const date = new Date().toLocaleDateString("en-GB");
    try {
      await axios.post("/api/blogs", {
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
  // ui rendering guyss!!
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
          <Editor />
        </section>
        <form onSubmit={saveBlog} className="flex flex-col gap-4 w-[35%]">
          <Input
            type="text"
            placeholder="title"
            label="Title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="slug"
            label="Slug"
            name="slug"
            onChange={(e) => setSlug(e.target.value)}
          />
          <TextArea
            placeholder="summary"
            label="Summary"
            onChange={(e) => setSummary(e.target.value)}
          />
          <Input
            type="text"
            placeholder="author"
            label="Author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <div>
            <Button type="submit">Create Blog</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
