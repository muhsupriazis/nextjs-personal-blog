import Link from "next/link";
import Image from "next/image";
export default function Blog({ title, link, description, tools, ...rest }) {
  return (
    <Link className="group hover:scale-105 duration-500" href={link} {...rest}>
      <article className="bg-[#e3fffc] p-8 rounded flex-col justify-between">
        <section className="flex justify-between items-center">
          <Image src="/blog.png" width="30" height="30" alt="blog" />
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link text-gray-600 hover:text-[#007a66ee]"
          >
            <title>{title}</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </section>
        <div>
          <h3 className="text-2xl font-[Bely] pt-6 group-hover:text-[#007a66ee] ">
            {title}
          </h3>
          <p>{description}</p>
        </div>
        <div className="tracking-wider text-sm text-gray-600">{tools}</div>
      </article>
    </Link>
  );
}
