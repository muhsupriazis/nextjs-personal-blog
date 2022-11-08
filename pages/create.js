import Link from "next/link";
import { Button, Editor, Input, TextArea } from "../components";
export default function Create() {
  async function saveBlog(e) {
    e.preventDefault();
    const content = document.querySelector(".ProseMirror").innerHTML;
    console.log(content);
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
          <Editor />
        </section>
        <form onSubmit={saveBlog} className="flex flex-col gap-4 w-[35%]">
          <Input type="text" placeholder="title" label="Title" name="title" />
          <TextArea placeholder="summary" label="Summary" />
          <Input
            type="text"
            placeholder="author"
            label="Author"
            name="author"
          />
          <div>
            <Button type="submit">Create Blog</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
