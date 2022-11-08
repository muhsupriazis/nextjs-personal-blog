import Link from "next/link";
import { Button, Input } from "../components";
export default function Login() {
  return (
    <>
      <main className="grid justify-center items-center h-screen">
        <div className="shadow p-4 rounded font-[Inter] text-slate-700">
          <section className="text-xl text-center p-4 border-b-[1px] border-solid border-slate-300">
            Welcome
          </section>
          <section>
            <form className="flex gap-4 my-4 flex-col">
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="******"
              />
              <Button type="submit">Login</Button>
            </form>
            <Link
              className="text-center inline-block w-full text-sm text-blue-600 underline"
              href="/"
            >
              www.muhsupriazis.com
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
