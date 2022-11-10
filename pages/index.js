import { Blog, Layout, Title } from "../components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home({ blogs }) {
  return (
    <Layout title="MuhSupriAzis | Home">
      <section>
        <h1 className="font-[Bely] text-gray-800 text-5xl">Muhammad Supri</h1>
        <h2 className="font-[Bely] leading-[2em] text-gray-800 text-5xl">
          Web Developer | <span>JavaScript</span>
        </h2>
        <div className="w-[70%] font-[Jost] text-lg text-gray-800 ">
          <p>
            Selamat datang! di personal websiteku. Website ini berisi seputar
            perjalanan belajarku, tentang dunia perkodingan ataupun pelajaran
            tentang kehidupan. Simplenya kalau dapat <i>Error</i> yang sudah
            saya solved akan saya bagikan di{" "}
            <span className="text-[#007a66ee]">
              <Link href="/blogs">sini dalam bentuk tulisan</Link>.
            </span>
          </p>
          <p>
            Ada juga halaman{" "}
            <span>
              <Link className="text-[#007a66ee]" href="/portfolios">
                project yang sudah saya kerjakan
              </Link>
            </span>
            . Kamu diperbolehkan untuk meng-<i>copy</i> atau mengembangkan
            projectnya, langsung saja <i>fork</i> atau <i>clone</i> repositori
            <span className="text-[#007a66ee]">
              <Link href="https://github.com/muhsupriazis"> githunya</Link>
            </span>
            . Terakhir, jika ingin bekerja bersama kamu bisa{" "}
            <span className="text-[#007a66ee]">
              <Link href="/contact">hubungi saya!</Link>
            </span>
          </p>
          <p>Semoga bermanfaat</p>
        </div>
      </section>
      <section className="w-full font-[Jost] text-lg text-gray-800">
        <Title>{"What, I'am Doing Right Now"}</Title>
        {/* Pemisah yahh guysss!!! */}
        <div>
          <div className="w-[100%] flex items-center my-[5em]">
            <div className="rounded shadow-lg overflow-hidden w-[55%]">
              <img src="/images/widrn1.png" />
            </div>
            <div className="w-[40%] absolute text-right right-[7.1em]">
              <h1 className=" font-[Bely] text-2xl mb-6">
                1. Social Media Scroller
              </h1>
              <p className="bg-[#e3fffc] p-6 rounded shadow-lg ">
                Fakta menarik, tenyata walaupun tidak berpenghasilan pekerjaan{" "}
                <Link
                  className="text-[#007a66ee]"
                  href="https://www.instagram.com/muhsupriazis/"
                >
                  Social Media Scroller
                </Link>{" "}
                adalah salah satu yang banyak diminati.
              </p>
            </div>
          </div>
          {/* pemisahnya disini ternyata */}
          <div className="w-[100%] flex flex-row-reverse items-center my-[5em]">
            <div className="w-[40%] absolute text-left left-[7.1em]">
              <h1 className=" font-[Bely] text-2xl mb-6">2. Developer Indie</h1>
              <p className="bg-[#e3fffc] p-6 rounded shadow-lg ">
                Fakta menarik lainya,{" "}
                <Link
                  className="text-[#007a66ee]"
                  href="https://www.instagram.com/muhsupriazis/"
                >
                  Social Media Scroller
                </Link>{" "}
                adalah salah satu yang banyak diminati.
              </p>
            </div>
            <div className="rounded justify-self-end shadow-lg overflow-hidden w-[55%]">
              <img src="/images/feelance.png" />
            </div>
          </div>
          {/* pemiah lagi */}
          <div className="w-[100%] flex items-center my-[5em]">
            <div className="rounded shadow-lg overflow-hidden w-[55%]">
              <img src="/images/work.png" />
            </div>
            <div className="w-[40%] absolute text-right right-[7.1em]">
              <h1 className=" font-[Bely] text-2xl mb-6">3. I'am Employee?</h1>
              <p className="bg-[#e3fffc] p-6 rounded shadow-lg ">
                Fakta menarik, tenyata walaupun tidak berpenghasilan pekerjaan{" "}
                <Link
                  className="text-[#007a66ee]"
                  href="https://www.instagram.com/muhsupriazis/"
                >
                  Social Media Scroller
                </Link>{" "}
                adalah salah satu yang banyak diminati.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full font-[Jost] text-lg text-gray-800">
        <Title>What I Wrote Recently</Title>
        <div>
          <div className="grid grid-cols-2 gap-5">
            {blogs.map((data) => (
              <Blog
                key={data._id}
                title={data.title}
                link={`blogs/${data.slug}`}
                tools={data.tools}
                description={data.summary}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.BASE_URL}/api/blogs`);
  const blogs = response.data;
  return {
    props: {
      blogs,
    },
  };
}
