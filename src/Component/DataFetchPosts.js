// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function DataFetchPosts() {
//     const [posts, setPosts] = useState({})
//     const [id, setId] = useState(1)
//     const [idFromButtonClick, setIdFromButtonClick] = useState(1)

//     useEffect(() => {
//         axios.get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)

//             .then(res => {
//                 console.log(res)
//                 setPosts(res.data)
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
//           <div><strong>User Title :</strong>{posts.title}</div>
//           <div><strong>User Content :</strong>{posts.body}</div>
//     </div>
//   )
// }

// export default DataFetchPosts