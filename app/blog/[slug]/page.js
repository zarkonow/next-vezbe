



export default async function Slug({params}) {

const res = await fetch (process.env.PRODUCT_API_URL+'/products/' +params.slug )

const data = await res.json()

console.log(data);


if (res.status === 404) {
  return('404 Not Found')
}



  return (
    <div>
    <h1 className="text-xl font-bold">Proizvod: {params.slug} </h1>
    
    
    <div>
      
        <p>{data.title}</p>
      
    </div>
    
    
    </div>



  )
}
//20.5