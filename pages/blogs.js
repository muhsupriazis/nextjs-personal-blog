import { Layout, Title, Blog } from "../components";
import axios from "axios";

export default function Blogs({ blogs }) {
  return (
    <Layout>
      <section className="w-full font-[Jost] text-lg text-gray-800">
        <Title>What I Have Witten</Title>
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
