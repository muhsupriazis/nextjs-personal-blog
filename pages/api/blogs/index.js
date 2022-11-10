import db from "../../../utils/connect_db";
import Blog from "../../../models/Blog";
export default async function handler(req, res) {
  await db();
  if (req.method == "POST") {
    try {
      const { title, slug, content, summary, author, date } = req.body;
      const blog = new Blog({ title, slug, content, summary, author, date });
      await blog.save();
      res.status(201).json({
        message: "Udah kesave cokk!!!",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  if (req.method == "GET") {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  }
}
