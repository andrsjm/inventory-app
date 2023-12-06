import React from 'react';
import { useApi } from "../context/ApiContext";

const Goods = () => {
  // ===== States =====
  // State untuk menyimpan seluruh goods dari API.
  const [goods, setGoods] = React.useState([]);
  // State untuk menyimpan offset untuk ke page selanjutnya.
  const [offset, setOffset] = React.useState(0);

  // ===== Axios API =====
  const api = useApi();

  // ===== useEffect =====
  React.useEffect(()=>{
    //untuk mendapatkan data pertama kali saat page di load menggunakan API.
    async function fetchData(){
      try{
        const response = await api.get(`/goods?offset=${offset}&limit=8`);
        setGoods(response.data.Data);
      } catch(error){
          console.error(error);
      }
    }
    fetchData();
  },[])

  if(goods.length>0){
    const goodsRow = goods.map(good => {
      return(
        <tr key={good.id} className='border border-stone-600'>
          <td className="py-4 px-6 border-b border border-stone-600">{good.id}</td>
          <td className="py-4 px-6 border-b border border-stone-600">{good.name}</td>
          <td className="py-4 px-6 border-b border border-stone-600">{good.category}</td>
          <td className="py-4 px-6 border-b border border-stone-600">{good.image}</td>
          <td className="py-4 px-6 border-b border border-stone-600">{good.unit}</td>
          <td className="py-4 px-6 border-b border border-stone-600">{good.price}</td>
          <td className="py-4 px-6 border-b border border-stone-600">{good.total_stock}</td>
        </tr>
      )
    })

    return(
      <div className="flex justify-center items-center h-screen bg-emerald-100 p-4">
        <div>
          <div className='text-center align-middle justify-center items-center p-2'>
            <h1 className='text-3xl p-1'> 
              <b>Goods!</b>
            </h1>
            <button className="text-white bg-gradient-to-r from-yellow-400 to-green-400 hover:from-yellow-300 hover:to-green-300 hover:text-gray-700 py-2 px-4 rounded-md transition duration-300 ease-in-out"><b>Add New Item +</b></button>
          </div>
          <table className="table-auto border border-stone-800">
            <thead>
              <tr className='border border-stone-600'>
                <th className='py-3 px-6 text-left border-b border border-stone-600'>Id</th>
                <th className='py-3 px-6 text-left border-b border border-stone-600'>Name</th>
                <th className='py-3 px-6 text-left border-b border border-stone-600'>Category</th>
                <th className='py-3 px-6 text-left border-b border border-stone-600'>Image</th>
                <th className='py-3 px-6 text-left border-b border border-stone-600'>Unit</th>
                <th className='py-3 px-6 text-left border-b border border-stone-600'>Price</th>
                <th className='py-3 px-6 text-left border-b border border-stone-600'>Stock</th>
              </tr>
            </thead>
            <tbody>
              {goodsRow}
            </tbody>
          </table>
        </div>
      </div>
    );
  }else{
    return <h1>KosOnG?!</h1>
  }
}

export default Goods