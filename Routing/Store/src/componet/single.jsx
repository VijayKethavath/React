import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single() {
  const { id } = useParams();
  const[load,setload] = useState(false)
  const [data, setdata] = useState({});

  useEffect(() => {
    async function fetchdata() {
      try {
        setload(true)
          let res = await fetch(`https://fakestoreapi.com/products/${id}`);
          let jsondata = await res.json();
          console.log(jsondata);
          setdata(jsondata);
          setload(false)
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <div>
    {
      load?(
        <h1>Loading Product...</h1>
      ):(
        <>
      <img src={data.image} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <h1>price: ${data.price}</h1>
        </>
      )
    }
    </div>
  );
}
export default Single;
