export default async function handleSubmit(req, res) {
  res.status(200).json(res.ops[0])
}
