import Blog from "../../../models/Blog";
import db from "../../../utils/connect_db";
export default async function handler(req, res) {
  await db();
  if (req.method == "DELETE") {
    try {
      await Blog.deleteOne({ _id: req.query.id });
      res.status(202).json({
        message: "Dah, kehapus bro :(",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  if (req.method == "GET") {
    try {
      const blog = await Blog.findById({ _id: req.query.id });
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  if (req.method == "PATCH") {
    try {
      // const { title, slug, content, summary, author, date } = req.body;
      await Blog.updateOne({ _id: req.query.id }, { $set: req.body });
      res.status(201).json({
        message: "Sukses mengedit bro!",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
