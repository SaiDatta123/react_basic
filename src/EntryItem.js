// import React from 'react';
// import Button from 'react-bootstrap/Button';


// function EntryItem({activeItem,handleChange,handleSubmit,editItem}) {

//     return (
//         <form action="" className="entry-form">
//             <div className="form-group">
//                 Description : &nbsp;&nbsp;
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     value={activeItem.description}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <br/>
//             <div className="form-group form-check" id="check-box" >
//                 Type : &nbsp;&nbsp;
//                 <select value={activeItem.type} onChange={handleChange}>
//                     <option value="Income">Income</option>
//                     <option value="Expense">Expense</option>
//                     required
//                 </select>
//             </div>
//             <br/>
//             <div className="form-group">
//                 Amount : &nbsp;&nbsp;
//                 <input
//                     type="number"
//                     placeholder="Amount"
//                     value={activeItem.amount}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <br/>
//             <Button variant="primary" type="submit" onSubmit={()=> handleSubmit(activeItem)}>{editItem ? "Edit" : "Save"}</Button>
//         </form>
//     );
// }


// export default EntryItem;