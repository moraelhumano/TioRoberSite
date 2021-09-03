import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'


import AlumniRegister from "../pages/AlumniRegister";

import { db } from "../firebase";
import { toast } from "react-toastify";



const Alumni = () => {

  const [links, setLink] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("links")
      .onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
 
      setLink(docs);

    });
  };


  useEffect(() => {
    getLinks();
  }, []);

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
        toast("El nuevo episodio ha sido agregado", {
          type: "success",
        });
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        toast("Link Updated Successfully", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="row">
      <div className="w-1/2 col-md-4 p-2">
        <AlumniRegister {...{ addOrEditLink, currentId, links }} />
      </div>
      <div className="col-md-8 p-2">
      <div className="flex-col-reverse">
        {links.map((link) => (
            <div className="card-body text-black" key={link.id}>
              <p>{link.alumniName}</p>
              <p>{link.message}</p>
              <p>{link.imagesAlumni}</p>
              <p>Hola mundo!</p>
            </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Alumni;
