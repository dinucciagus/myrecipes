import { prisma } from "../../../server/db/client";

export default async function recipeshandler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { name, ingredients, instructions, video, category } = req.body;
      const post = await prisma.post.create({
        data: {
          name,
          ingredients,
          instructions,
          video,
          category,
        },
      });
      res.status(201).json(post);
      break;
    default:
      res.setHeader("allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
