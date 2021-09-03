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



const Episodes = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("links")
      .onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };



  useEffect(() => {
    getLinks();
    console.log(links)

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
      <Navbar />

      <div className="col-md-4 p-2">
        <AlumniRegister {...{ addOrEditLink, currentId, links }} />
      </div>
      <div className="col-md-8 p-2">

      <div className="flex-col-reverse">
        {links.map((link) => (
          <div className="card mb-1 mt-4 " key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">       
              </div>
              <p>{link.description}</p>
              {link.specialGuest === "" ? (
                  <span></span>
                ) : (
                  <label> 
                  <p>{link.specialGuest}</p>  
                    <a href={link.igGuest} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                </label>
                )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Episodes;
