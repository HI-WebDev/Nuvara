
// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { fetchProducts } from '../products/productSlice';
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
// import { IoMdEye, IoIosEyeOff } from "react-icons/io";
// import { addToCart } from "../cart/cartSlice";




// const Products = () => {
//   const data = useSelector((state) => state.products)
//   const fourProducts = data.data.slice(0, 4);
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchProducts())
//   }, [dispatch])

//   //handle click 
//   const [isActive, setActive] = useState(false);
//   const [isActive2, setActive2] = useState(false);
//     const [isClicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setActive(!isActive)
//   }

//   const handleClick2 = () => {
//     setActive2(!isActive2)
//   }

//   const handleClicked = () => {
//     setClicked(!isClicked)
//   }
//   return (
//     <>
//       {fourProducts.loading && <h1>Loading...</h1>}
//       <div className="container">
//         <div className="row">
//           {fourProducts.map((product) => (
//             <div key={product.id} className={isClicked ? "col" : "col d-none"}>
//               <div className={`product `}>
//                 <div className="card">
//                   <div className="image position-relative">
//                     <img src={product.image} className={isActive2 ? "card-img-top disable p-5" : "card-img-top p-5"}
//                       alt="product1" />
//                     <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2" >
//                       New
//                     </span>
//                     <div className="outils d-flex flex-column position-absolute">
//                       <span className={isActive ? "heart clicked d-flex justify-content-center align-items-center mb-2"
//                         : "heart  d-flex justify-content-center align-items-center mb-2"}
//                         onClick={handleClick}>
//                         {isActive ? <FaHeart /> : <FaRegHeart />}
//                       </span>
//                       <span className="d-flex fs-5 justify-content-center align-items-center"
//                         onClick={handleClick2}>
//                         {isActive2 ? <IoIosEyeOff /> : <IoMdEye />}
//                       </span>
//                     </div>
//                     <div className="addCart btn position-absolute w-100 text-center pt-2 pb-1" >
//                       <h1 className="fs-6 fw-bold text-capitalize p-0" onClick={() => dispatch(addToCart(product))} >
//                         add to cart
//                       </h1>
//                     </div>
//                   </div>
//                   <div className="card-body p-0">
//                     <h5 className="card-title mt-3">{product.title}</h5>
//                     <div>
//                       <p className="card-price d-flex mb-1">
//                         <span className="fw-bold me-3">${product.price}</span>
//                         <del className="fw-bold">${Math.floor(product.price + 20)}</del>
//                       </p>
//                       <p className="card-rate d-flex">
//                         <span className="me-2 d-flex align-items-center fw-bold">
//                           {product.rating.rate}
//                           <FaStar className="ms-1" />
//                         </span>
//                         <span className="rating fw-bold">({product.rating.count})</span>
//                       </p>
//                     </div>

//                     <div className={`colors position-absolute`}>
//                       <span className="me-2">{product.rating.count >= 200 ? "" : null}</span>
//                       <span className="sec">{product.rating.count >= 200 ? "" : null}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           ))}
//         </div>
//       </div>




//       {!data.loading && data.error ? <h1>Eroor : {data.error}</h1> : null}
//     </>
//   )
// }

// export default Products


// {/* <div className="card mb-3" style={{ width: "18rem" }}>
// <img src={product.image} className="card-img-top ms-auto me-auto mt-3 mb-4" alt="product" style={{ width: "190px", height: "180px" }} />
// <div className="card-body">
//   <h5 className="card-title text-center">{product.title}</h5> */}
// {/* <p className="card-text">{product.description}</p> */ }
// //   <div className="price d-flex justify-content-center align-items-center mt-3">
// //     <span className="card-price me-2 text-center">{product.price}$</span>
// //     <a href="#" className="btn btn-primary m" onClick={() => dispatch(addToCart(product))}>Add to cart</a>
// //   </div>
// // </div>
// // </div>