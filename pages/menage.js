import Link from "next/link";
import { Button, Table } from "../components";
export default function Menage() {
  return (
    <div className="p-8 font-[Inter]">
      <header className="flex justify-between">
        <Link className="text-sm text-blue-600 underline" href="/create">
          Create Blogs
        </Link>
        <Button>Logout</Button>
      </header>
      <main className="mt-4">
        <Table>
          <tr className="text-slate-700">
            <td className="pt-2">1</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              tempora animi assumenda voluptas mollitia provident ullam vitae
              neque at odit amet, eos pariatur officia quibusdam.
            </td>
            <td>Muhammad Supri</td>
            <td>
              <div>
                <Link href="/edit/id">Edit</Link>
                <Link href="delete/id">Delete</Link>
              </div>
            </td>
          </tr>
        </Table>
      </main>
    </div>
  );
}
