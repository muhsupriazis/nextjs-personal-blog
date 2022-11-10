import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Table } from "../components";
export default function Menage({ blogs }) {
  const [message, setMessage] = useState("");
  const route = useRouter();
  // handler Delete Blog
  async function deleteBlog(id) {
    const response = await axios.delete(`/api/blogs/${id}`);
    setMessage(response.data.message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
    route.push("/menage");
  }
  // rendering ui
  return (
    <div className="p-8 font-[Inter]">
      <header className="flex justify-between">
        <Link className="text-sm text-blue-600 underline" href="/create">
          Create Blogs
        </Link>
        <div className="w-[200px]">
          {message && (
            <p className="p-2 border-solid text-[12px] rounded border-[1px] border-blue-500 bg-blue-200 text-blue-500">
              {message}
            </p>
          )}
        </div>
        <Button>Logout</Button>
      </header>
      <main className="mt-4">
        <Table>
          {blogs.map((blog, i) => (
            <tr className="text-slate-700" key={blog._id}>
              <td className="pt-2">{i + 1}</td>
              <td>{blog.title}</td>
              <td>{blog.summary}</td>
              <td>{blog.date}</td>
              <td>{blog.author}</td>
              <td>
                <div className="flex gap-1">
                  <Link
                    className="text-blue-700 underline"
                    href={`/update/${blog._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="text-blue-700 underline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.BASE_URL}/api/blogs`);
  const blogs = response.data;
  console.log(blogs);
  return {
    props: {
      blogs,
    },
  };
}
