import React, { useState } from 'react'
import { AiOutlinePicture } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const CreatePost = ({setShowPost, currUser}) => {

  

   const handleSubmit = (e) => {

       e.preventDefault()

       const formData = new FormData();

       formData.append("post[description]", e.target.description.value);


       formData.append("post[image]", e.target.image.files[0] );

       formData.append("post[user_id]", currUser.id );



       


       postData(formData)
     
   }



   const postData = (formData) => {


    fetch('http://localhost:3000/posts', {
      method: "POST",
      body: formData,
    }).then((response) => response.json())
    .then((data) => {
      
      console.log(data);
      

    }).catch((error) => console.log(error));

   };

   

  return (
    <div className='postCreateBackground'>

      
      <div className='x' onClick = {() => setShowPost(false)}>X</div>
      
     
      <h1>Choose a photo to post</h1>

      < AiOutlinePicture className='createPic'/>

      <form onSubmit={(e) => handleSubmit(e)} className = "postForm">
        <input type = "file" name = "image" id = "image" />

        <textarea type = "text" name = "description" id = "description" 
         placeholder='add description' className='secondInput' />
     

        <button type = "submit" className='firstSubmitButton'>Submit</button>
      </form>
      </div>

     

     
          

  
  )
}

export default  CreatePost
