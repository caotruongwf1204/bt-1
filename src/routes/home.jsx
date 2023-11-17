import { useEffect, useState } from "react";
import Main from "../component/Main";

 

export default function Home() {
  const [{ products, loading, error }, setData] = useState({
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        setData({
          products: [],
          loading: false,
          error: "khong tai duoc du lieu san pham",
        });
      } else {
        const json = await res.json();

        setData({
          products: json.products,
          loading: false,
          error: null,
        });
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <Main products={products}></Main>
    </main>
  );
}
