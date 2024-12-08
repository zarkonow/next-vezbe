import Image from "next/image";

export default async function Slug({ params }) {
  const res = await fetch(
    process.env.PRODUCT_API_URL + "/products/" + params.slug
  );

  const data = await res.json();

  console.log(data);

  if (res.status === 404) {
    return "404 Not Found";
  }

  return (
    <div>
      <h1 className="text-xl font-bold p-2">Proizvod: {params.slug} </h1>

      <div>
        <Image src={data.thumbnail} alt={data.title} width="200" height="100" />
        <p className="text-2xl p-2">{data.title}</p>
        <p className="text-xs text-gray-400 text-start p-2">
          {data.description}
        </p>
        <p className="text-xl p-2">{data.brand}</p>
      </div>
    </div>
  );
}
//20.5
