import axios from "axios";
export const POST = async (req: Request) => {
  const data = await req.json();

  try {
    const reponse = await axios.post("http://localhost:3333/sendEmail", data);
    return Response.json(reponse.data);
  } catch (err) {
    throw err;
  }
};
