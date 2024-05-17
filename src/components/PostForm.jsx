// import { useState } from "react";

// function PostForm() {
//     const [userId, setUserId] = useState("");
//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(userId, title, body);
//         // setUserId("");
//         // setTitle("");
//         // setBody("");
//         fetch("https://jsonplaceholder.typicode.com/posts", {
//           method: "POST",
//           body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: userId,
//           }),
//           headers: {
//             "Content-type": "application/json; charset=UTF-8",
//           },
//         })
//           .then((response) => response.json())
//           .then((json) => console.log(json));
//     };
//   return (
//       <form onSubmit ={ handleSubmit}> 
//     <div>
//         <input type="text" 
//         name="userId"
//         placeholder="userId"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//          />
//          </div>
//          <div>
//         <input 
//         type="text"
//          name="title"
//           placeholder="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//          />
//          </div>
//          <div>
//         <input 
//         type="text"
//          name="body"
//         placeholder="post body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//           />
//     </div>
//       <button type="submit" >Submit</button>
//       </form>
//   );
// }

// export default PostForm;


import React, { useState } from "react";

function PostForm() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the submitted form data in state
    const formData = {
      userId: userId,
      title: title,
      body: body,
    };
    setSubmittedData(formData);

    // Clear the form fields
    setUserId("");
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="userId"
            placeholder="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            placeholder="post body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Render submitted form data */}
      {submittedData && (
        <div>
          {/* <h2>Submitted Form Data:</h2> */}
          {/* <p>User ID: {submittedData.userId}</p> */}
          {/* <p>Title: {submittedData.title}</p> */}
          <p>Body: {submittedData.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostForm;
