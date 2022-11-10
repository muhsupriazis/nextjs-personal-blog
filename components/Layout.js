import Head from "next/head";
import Link from "next/link";

export default function Layout(props) {
  return (
    <div>
      {/* heading teg HTML */}
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex z-10 justify-between px-14 py-6 sticky top-0 bg-gradient-to-t from-transparent to-white ">
        <Link
          className="font-[Bely] text-gray-800 font-bold text-[30px]"
          href="/"
        >
          {/* <Image src="/favicon.ico" width="20" height="20" /> */}
          MS
        </Link>
        <nav className="flex items-center gap-16">
          <ul className="flex items-center  text-[17px] justify-evenly text-gray-800 gap-4 font-[Jost]">
            <li>
              <Link className="inline-block p-1" href="/about">
                1. About
              </Link>
            </li>
            <li>
              <Link className="inline-block p-2" href="/blogs">
                2. Blogs
              </Link>
            </li>
            <li>
              <Link className="inline-block p-2" href="/portfolios">
                3. Portfolio
              </Link>
            </li>
          </ul>
          <Link
            className=" p-2 rounded font-[Jost] text-gray-800 bg-[#00ffb3]"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="px-[8em]">{props.children}</main>
      <footer className="bg-white text-gray-800 font-[Jost] text-lg my-32">
        <p className="text-center">Makassar &copy; 2022 - 2022</p>
        <div className="flex justify-center my-[2.3em] gap-8 ">
          <Link className="hover:text-[#007a66ee]" href="/conact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather w-[30px] feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <Link className="hover:text-[#007a66ee]" href="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather w-[30px] feather-instagram"
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link className="hover:text-[#007a66ee]" href="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather w-[30px] feather-twitter"
            >
              <title>Twitter</title>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </Link>
          <Link className="hover:text-[#007a66ee]" href="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather w-[30px] feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
}
