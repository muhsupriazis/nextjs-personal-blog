export default async function handler(req, res) {
  if (req.method == "POST") {
    res.status(201).json({
      message: "success",
    });
  }
}
