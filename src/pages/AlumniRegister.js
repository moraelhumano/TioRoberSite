import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";
import ImageUploading from 'react-images-uploading';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const AlumniRegister = (props) => {

  const initialStateValues = {
    alumniName: "", 
    message:"",
    imageAlumni: "",
  };

  const [values, setValues] = useState(initialStateValues);
  const [imagesAlumni, setImagesAlumni] = React.useState([]);

  const maxNumber = 69;

  const onChangeImg = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
     setImagesAlumni(imageList);
    
   
  };

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const validURL = (str) => {
  //   var pattern = new RegExp(
  //     "^(https?:\\/\\/)?" + // protocol
  //     "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  //     "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  //     "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  //     "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
  //       "(\\#[-a-z\\d_]*)?$",
  //     "i"
  //   ); // fragment locator
  //   return !!pattern.test(str);
  // };

 


  const handleSubmit = (e) => {
    e.preventDefault();

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <>
    <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
      <div className="form-group input-group">
        <input
          type="text"
          value={values.alumniName}
          name="alumniName"
          placeholder="Nombre"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Mensaje"
          value={values.message}
          name="message"
          onChange={handleInputChange}
        />
      </div>

      <div className="App">
      <ImageUploading
        
        value={values.imageList}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        name="imageAlumni"
        onChange={onChangeImg}

      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper text-black">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {props.currentId === "" ? "Save" : "Update"}
      </button>

    </form>
    </>
    
  );
};

export default AlumniRegister;





