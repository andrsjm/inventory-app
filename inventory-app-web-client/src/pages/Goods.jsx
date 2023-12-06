import React from 'react';
import Axios from 'axios';

const Goods = () => {

  const [goods, setGoods] = React.useState([]);

  React.useEffect(()=>{
    async function fetchData(){
      try{
        const response = await Axios.get('http://10.10.101.25:3030/goods?offset=0&limit=5');
        console.log(response);
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
      <div className="bg-green-100 p-4 border border-stone-800">
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
    );
  }else{
    return <h1>KosOnG?!</h1>
  }
}

export default Goods