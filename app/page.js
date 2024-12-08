import Image from "next/image";

export default async function Home() {
  const res = await fetch(process.env.PRODUCT_API_URL + "/products?limit=9");
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h1 className="text-4xl">Proizvodi:</h1>

      <div className="grid grid-cols-4 gap-4 ">
        {data.products.map((product) => (
          <div className="mt-3" key={product.id}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width="100"
              height="50"
            />
            <p className="text-xl line-clamp-2">{product.title}</p>
            <p className="text-xs text-gray-400 text-start line-clamp-4">
              {product.description}
            </p>
            <p className="text-xl line-clamp-1">{product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

//21.8
