import { useNavigate, useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate("/products");
  }
  return (
    <>
      <h1 className="text-4xl text-center font-bold p-20">Product {id}</h1>
      <p className="text-center text-xl w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <button onClick={handleBack} className="bg-blue-500 text-white px-4 py-2 rounded-md flex justify-center items-center mx-auto mt-10 cursor-pointer hover:bg-blue-800 transition-colors duration-200">Back to Products</button>
    </>
  )
}

export default Product