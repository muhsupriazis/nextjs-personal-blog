import { model, models, Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  slug: String,
  content: String,
  summary: String,
  author: String,
  date: String,
});

const Blog = models.blog || model("blog", blogSchema);

export default Blog;
