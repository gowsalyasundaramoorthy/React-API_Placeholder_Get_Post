// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function DataFetchUsers() {
//     const [users, setUsers] = useState({})
//     const [id, setId] = useState(1)
//     const [idFromButtonClick, setIdFromButtonClick] = useState(1)

//     useEffect(() => {
//         axios.get(`http://jsonplaceholder.typicode.com/users/${idFromButtonClick}`)

//             .then(res => {
//                 console.log(res)
//                 setUsers(res.data)
//             })
//              .catch(err => {
//                 console.log(err)
//             })
            
//     }, [idFromButtonClick])
    
//     const handleClick = () => {
//         setIdFromButtonClick(id)

//     }

//   return (
//       <div className='container'>
//           <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
//           <button type="button" onClick={handleClick}>Fetch User Details</button>
//           <div><strong>User name :</strong>{users.name}</div>
          
//     </div>
//   )
// }

// export default DataFetchUsers