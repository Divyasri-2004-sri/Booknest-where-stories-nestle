// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// import '../Vendor/List.css'
// import Unavbar from './Unavbar';

// function OrderItem() {
//   const [item, setItem] = useState([]);
//   const [formData, setFormData] = useState({
//     flatno: '',
//     city: '',
//     pincode: '',
//     state: '',
//     totalamount: '',
//     seller:'',
//     totalamount:'',
//     description:''
//   });


//   const { id } = useParams();

//   useEffect(() => {
//     axios.get(`http://localhost:8000/item/${id}`)
//       .then((resp) => {
//         console.log(resp);
//         setItem(resp.data); // Set item to the fetched data (an object, not an array)
//       })
//       .catch(() => {
//         console.log("Did not get data");
//       });
//   }, [id]);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value});
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Update formData with user input
//       const updatedFormData = { ...formData };
      
      
//       const selectedItem = item[0]; // Assuming you're using the first item in the array
//       const seller=selectedItem.userName;
//       const description=selectedItem.description; 
//       const price = selectedItem.price;

//       const totalAmount = price /100 *5  + +price; // Calculate the total amount
  
     
//       updatedFormData.totalamount = totalAmount;
//       updatedFormData.userName=seller
//       updatedFormData.description=description

  
      
  
//       // Now you can post the updatedFormData
//       const userId = JSON.parse(localStorage.getItem('user')).id;
//       const userName = JSON.parse(localStorage.getItem('user')).name;
//       updatedFormData.userId=userId
//       updatedFormData.userName=userName
      
//       await axios.post('http://localhost:8000/userorder', updatedFormData);
//       console.log(updatedFormData);
//       alert('ordered successfully');
//       navigate('/uhome');
//     } catch (error) {
//       console.error('Error adding bike insurance: ', error);
//     }
//   };
  

//   return (
//     <div  style={{backgroundColor:"",}}>
//         <Unavbar/>
//      <div style={{ display: 'flex ' }} >
//         <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-white">
//           <h2 className="text-2xl font-semibold" >Your order is almost Done! </h2>
//           <p>We just need a few more details before payment</p>
//           {/* <p>item name:{item.itemtype}</p> */}
//           <form onSubmit={handleSubmit}>
//           <label className="block text-gray-600" style={{paddingBottom:"5px"}}>Address:</label>
        
//   <div >
//     <div class="input-container">
//       <input type="text" id="myInput"  class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" "style={{width:"340px"}} 
//       name="flatno"
//       value={formData.flatno}
//       onChange={handleChange}
//      />
//       <label for="myInput"  class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
//         Flat no
//       </label>
//     </div>
//   </div><br/>
//  <div style={{display:"flex",justifyContent:"space-between"}}>
//  <div >
//     <div class="input-container">
//       <input type="text" id="myInput"  class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" "
//       style={{width:"140px"}} 
//      name="city"
//       value={formData.city}
//       onChange={handleChange}
//      />
//       <label for="myInput"  class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
//         City
//       </label>
//     </div>
//   </div> 
//   <div >
//     <div class="input-container">
//       <input type="text" id="myInput"  class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" "
//       style={{width:"140px"}} 
//       name="pincode"
//       value={formData.pincode}
//       onChange={handleChange}
//      />
//       <label for="myInput"  class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
//         Pincode
//       </label>
//     </div>
//   </div>
//  </div>
//   <br/>
//   <div >
//     <div class="input-container">
//       <input type="text" id="myInput"  class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" "style={{width:"340px"}} 
//       name="state"
//       value={formData.state}
//       onChange={handleChange}
//      />
//       <label for="myInput"  class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
//         State
//       </label>
//     </div>
//   </div> <br/>
//             {/* {item  && ((item, index) => (
//               <div key={index}>
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                   <p>Net premium </p>
//                   <p>₹{item.price}</p>
//                 </div>
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                   <p>GST </p>
//                   <p>₹{item.price/100 * 5}</p>
//                 </div>
//                 <div style={{borderBottom:"2px solid black"}}></div>
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                   <p>Total Amount</p>
//                   <p>₹ {item.price /100 *5  + +item.price}</p>
//                 </div>
//                 <div className='d-flex'>
//                   <input type='checkbox' />
//                   <p className='mt-3 pl-3'>I agree to the terms & conditions </p>
//                 </div>
//               </div>
//             ))} */}
//              {item && (
//                 <div>
//                     <div style={{ display: "flex", justifyContent: "center", height: "100px",width:"100px" }} >
//                         <img src={`http://localhost:8000/${item?.itemImage}`} alt={`${item.itemtype} Image`} />
//                     </div>
//                     {/* <h1 className='text-center'> {item.itemtype}-{item._id.slice(3, 7)}</h1> */}
//                     {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}> */}
                      
//                         <div style={{ display:'flex',justifyContent:"space-between" }}>
//                             <p style={{ fontSize: "20px" }}>Price:</p>
//                             <p>{item.price}</p>
                       
//                         {/* </div> */}
//                     </div>
                    
//                 </div>


//             )}


//             <button
//               type="submit"
//               style={{ width: "340px" }}
//               className="bg-blue-400 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Order
//             </button>
//           </form>
//         </div>
//       </div> 
//       <div> 
        
        
//       </div>
//     </div>
//   );
// }

// export default  OrderItem

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Seller/List.css';
import Unavbar from './Unavbar';

function OrderItem() {
  const [item, setItem] = useState({});
  const [formData, setFormData] = useState({
    flatno: '',
    city: '',
    pincode: '',
    state: '',
  });

  const fee = 99;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/item/${id}`)
      .then((resp) => {
        setItem(resp.data);
      })
      .catch((error) => {
        console.log("Failed to fetch item data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Log item data to debug
    console.log("Item data:", item);

    // Required fields check
    const requiredFields = ['userName', 'description', 'price', 'title', 'author', 'genre', 'itemImage'];
    const missingFields = requiredFields.filter(field => !item[field]);

    if (missingFields.length > 0) {
      throw new Error(`Item data is missing required properties: ${missingFields.join(', ')}`);
    }

    const {
      userName,
      userId,
      description,
      price,
      title,
      author,
      genre,
      itemImage
    } = item;

    const totalAmount = parseInt(price, 10) + 99;

    const updatedFormData = {
      ...formData,
      totalamount: totalAmount,
      seller: userName,
      sellerId: userId,
      description,
      booktitel: title,
      bookauthor: author,
      bookgenre: genre,
      itemImage
    };

    // Add current user details
    const currentUser = JSON.parse(localStorage.getItem('user'));
    updatedFormData.userId = currentUser?.id;
    updatedFormData.userName = currentUser?.name;

    // Final check before sending
    if (!updatedFormData.userId || !updatedFormData.userName) {
      throw new Error("Current user data missing. Please log in again.");
    }

    await axios.post('http://localhost:4000/userorder', updatedFormData);
    alert('Ordered successfully');
    navigate('/myorders');
  } catch (error) {
    console.error('Error adding item:', error);
    alert('Something went wrong. Please check the form and try again.');
  }
};

  return (
    <div style={{ backgroundColor: '' }}>
      <Unavbar />
      <div style={{ display: 'flex' }}>
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-white">
          <h2 className="text-2xl font-semibold">Your order is almost done!</h2>
          <form onSubmit={handleSubmit}>
            {/* Address Fields */}
            <div>
              <label className="block text-gray-600 text-center" style={{ paddingTop: "10px" }}>Address:</label>
              <div className="input-container">
                <input
                  type="text"
                  name="flatno"
                  className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
                  placeholder=" "
                  style={{ width: "340px" }}
                  value={formData.flatno}
                  onChange={handleChange}
                />
                <label className="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
                  Flat no
                </label>
              </div>
            </div><br />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="input-container">
                <input
                  type="text"
                  name="city"
                  className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
                  placeholder=" "
                  style={{ width: "140px" }}
                  value={formData.city}
                  onChange={handleChange}
                />
                <label className="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
                  City
                </label>
              </div>

              <div className="input-container">
                <input
                  type="text"
                  name="pincode"
                  className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
                  placeholder=" "
                  style={{ width: "140px" }}
                  value={formData.pincode}
                  onChange={handleChange}
                />
                <label className="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
                  Pincode
                </label>
              </div>
            </div><br />

            <div className="input-container">
              <input
                type="text"
                name="state"
                className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
                placeholder=" "
                style={{ width: "340px" }}
                value={formData.state}
                onChange={handleChange}
              />
              <label className="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
                State
              </label>
            </div><br />

            {/* Item Preview and Pricing */}
            {item && (
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end", height: "100%", width: "100%" }}>
                  <div style={{ height: "100px", width: "50px" }}>
                    <img
                      src={`http://localhost:4000/${item?.itemImage}`}
                      alt={`${item.itemtype} Image`}
                    />
                    <p className="text-end">{item.itemtype}-{item._id ? item._id.slice(3, 7) : ''}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Price:</p>
                  <p>{item.price}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Delivery:</p>
                  <p>₹{fee}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Total Amount:</p>
                  <p>₹{parseInt(item.price, 10) + fee}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              style={{ width: "340px", marginTop: "10px" }}
              className="bg-blue-400 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;

