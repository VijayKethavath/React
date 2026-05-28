import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        let jsondata = await res.json();
         console.log(jsondata);
        setData(jsondata);
      } catch (error) {
        console.log(error);
      }
    }
    getdata();
  }, []);
  return (
    
    <div>
      <input type="search "/>
      {Data.map((item) => (
        <Link to={"/products/" + item.id} key={item.id}>
          <img src={item.image} />
          <h1>{item.title}</h1>
        </Link>
      ))}
    </div>
  );
}
export default Home;
