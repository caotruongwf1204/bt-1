import "./App.css";
import { useEffect, useState } from "react";
import Button from "./component/Button";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Nav from "./component/Nav/Nav";
import Counter from "./component/Counter";
import Carousel from "./component/Carousel/Carousel";
import Clock from "./component/Clock";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Products from "./routes/products";
import ShoppingCart from "./routes/shopping-cart";
import Root from "./routes/root";

// const products = [
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 1",
//     price: 200.0,
//     reviews: 4.2,
//     variants: [
//       { originPrice: 250.0 },
//       { originPrice: 300.0, salePrice: 250.0 },
//     ],
//     isSale: true,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 2",
//     price: 150.0,
//     reviews: 4.5,
//     variants: [{ originPrice: 180.0 }, { originPrice: 200.0 }],
//     isSale: false,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 3",
//     price: 99.0,
//     reviews: 4.0,
//     variants: [{ originPrice: 120.0, salePrice: 99.0 }],
//     isSale: true,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 4",
//     price: 350.0,
//     reviews: 4.8,
//     variants: [{ originPrice: 400.0 }],
//     isSale: false,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 5",
//     price: 75.0,
//     reviews: 3.5,
//     variants: [
//       { originPrice: 90.0, salePrice: 75.0 },
//       { originPrice: 100.0, salePrice: 80.0 },
//     ],
//     isSale: true,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 6",
//     price: 180.0,
//     reviews: 4.1,
//     variants: [{ originPrice: 200.0, salePrice: 180.0 }],
//     isSale: true,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 7",
//     price: 299.0,
//     reviews: 4.3,
//     variants: [{ originPrice: 320.0, salePrice: 299.0 }],
//     isSale: true,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 8",
//     price: 120.0,
//     reviews: 4.6,
//     variants: [{ originPrice: 140.0, salePrice: 120.0 }],
//     isSale: true,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 9",
//     price: 220.0,
//     reviews: 4.4,
//     variants: [
//       { originPrice: 250.0, salePrice: 220.0 },
//       { originPrice: 280.0, salePrice: 240.0 },
//     ],
//     isSale: true,
//   },
//   {
//     thumbnail: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     name: "Sản phẩm 10",
//     price: 90.0,
//     reviews: 3.9,
//     variants: [{ originPrice: 100.0, salePrice: 90.0 }],
//     isSale: true,
//   },
// ];

// const carousel = [
//   {
//     image:
//       "https://1.bp.blogspot.com/-P4wpYIQ_Ag8/YCtiJIJabuI/AAAAAAAA7lQ/0ttciegq7_AT2246-FNi5W1f_H9l-oTxwCLcBGAsYHQ/s0/Cute-pho-mai-que-%2B%25281%2529.jpg",
//     title: "Hình ảnh cute phô mai que",
//     description: "Hình ảnh 1 con lợn con",
//   },
//   {
//     image:
//       "https://1.bp.blogspot.com/-nMoyJhfIVT4/YCtiOvI3BBI/AAAAAAAA7m4/Kzz_nE-m45wIKnFVOWo6HI8-tXU7BdIDwCLcBGAsYHQ/s0/Cute-pho-mai-que-%2B%25284%2529.jpg",
//     title: "Hình ảnh 2 con lợn",
//     description: "Hình ảnh 2 con lợn con",
//   },
//   {
//     image:
//       "https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-1-inkythuatso-08-14-13-02.jpg",
//     title: "Đèn lồng",
//     description: "Hình ảnh Đèn lồng",
//   },
// ];


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      {path:"/products", element: <Products></Products>},
      { path:"/shopping-cart", element: <ShoppingCart></ShoppingCart>},
    ],
  },
]);



function App() {

  // const handleClickA = () => {
  //   console.log("clickedA");
  // };
  // const handleClickB = () => {
  //   console.log("clickedB");
  // };
  // const handleClickC = () => {
  //   console.log("clickedC");
  // };
  // const handleClickD = () => {
  //   console.log("clickedD");
  // };

  // const [enableCounter, setEnableCounter] = useState(true);

  // const handleChange = (e) => {
  //   setEnableCounter(e.target.checked);
  // };

  // const [showClock, setShowClock] = useState(true);

  //   const toggleClock = () => {
  //       setShowClock(!showClock);
  //   };
  return (
    <>
      {/* <h1>useEffect</h1>
      <label>
        <input
          type="checkbox"
          checked={enableCounter}
          onChange={handleChange}
        />
        <span>Enable counter</span>
      </label>

      <Counter disabled={!enableCounter} />

      <button onClick={toggleClock}>Toggle clock</button>

            {showClock && <Clock />}

      <Carousel items={carousel}></Carousel>

      <Button onClick={handleClickA}>click a</Button>
      <Button onClick={handleClickB}>click b</Button>
      <Button onClick={handleClickC}>click c</Button>
      <Button onClick={handleClickD}>click d</Button> */}
      {/* Navigation */}
      {/* <Nav></Nav> */}
      {/* Header */}
      {/* <Header></Header> */}
      {/* Section */}
      {/* <Main products={products}></Main> */}
      {/* Footer */}
      {/* <Footer></Footer> */}


      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
