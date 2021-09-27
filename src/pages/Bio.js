import React, { Component } from 'react';

import MapIcon from '../../src/map-pin.svg';
import TioRoberBio from '../../src/estamal.jpeg';
import IgLogo from '../../src/instagram-logo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Bio extends Component{
    render() {
        return (
        <>
        <section className="font-sans antialiased text-gray-900 leading-normal tracking-wider pb-6 bg-estamal bg-estamal">
          <div className="max-w-4xl flex items-center justify-center flex-col flex-wrap mx-auto lg:my-0 pb-10 md:pt-20 pt-0">
            <div id="profile" className="w-10/12 rounded-lg lg:rounded-l-lg  md:w-full shadow-2xl md:mt-20 mt-28 bg-white  mx-6 lg:mx-0">
              <div className="pt-36 md:p-8 md:pt-20 text-center lg:text-left shadow-2xl md:shadow-none">
                <div className="text-center pb-4">
                  <div className="block rounded-full shadow-xl  mx-auto -m-32 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url(${TioRoberBio})`}}></div>
                    <div className="pt-32">
                    <h2 className="text-3xl  pt-4 lg:mt-2">Tour</h2>
                    <h2 className="text-4xl font-bold lg:mt-2">Está mal reirse de esto</h2>
                    <p className="text-2xl lg:mt-2">Encuentra aquí tus boletos</p>
                    {/* <div className="flex align-center justify-center items-center pt-2">
                      <img src={MapIcon} className="h-8 w-8" />
                      <p className="text-gray-800">CDMX</p>
                    </div> */}
                    {/* <b><p className="text-gray-800 text-base pt-2 text-2xl">Tour Esto está mal reírse de esto</p></b> */}
                    </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-2 md:px-0 w-full flex flex-col md:flex-row flex-flow md:justify-between justify-center items-center">
              <a className="fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://all.checkout.tuboleta.com/selection/event/date?productId=10228374221197">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                  <p className="text-sm">29</p>
                  <p>SEP</p>
                </div>
                <div className="locacion">
                  <p className="flex text-base font-bold ml-2">MEDELLÍN / BLUE</p>
                </div>
              </a>
              <a className=" mt-2 md:mt-0  fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://all.checkout.tuboleta.com/selection/event/date?productId=10228374221198">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                  <p className="text-sm">1</p>
                  <p>OCT</p>
                </div>
                <div className="locacion">
                  <p className="flex text-base font-bold ml-2">BÓGOTA / BOOM STAND UP BAR</p>
                </div>
              </a>
            </div>

            <div className="mt-2 md:mt-6 px-2 md:px-0 w-full flex flex-col md:flex-row flex-flow justify-center items-center">
              <a className="fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://all.checkout.tuboleta.com/selection/event/date?productId=10228374221198">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                  <p className="text-sm">2</p>
                  <p>OCT</p>
                </div>
                <div className="locacion">
                  <p className="flex text-base font-bold ml-2">BÓGOTA / BOOM STAND UP BAR</p>
                </div>
              </a>
              <a className=" mt-2 md:mt-0 fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://ventas.donboleton.com/eventperformances.asp?evt=2157">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                <p>16</p>
                  <p>OCT</p>
                </div>
                <div className="locacion">
                  <p className="flex text-base font-bold ml-2">CHIHUAHUA / TEATRO DE LA CIUDAD</p>
                </div>
              </a>
            </div>
            <div className="mt-0 md:mt-6 px-2 md:px-0 w-full flex flex-col md:flex-row flex-flow justify-center items-center">
              <a className="mt-2 md:mt-0 fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://all.checkout.tuboleta.com/selection/event/date?productId=10228374221198">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                  <p>30</p>
                  <p>OCT</p>
                </div>
                <div className="locacion">
                  <p className="flex text-sm font-bold ml-2">MONTERREY / AUDITORIO PABELLÓN M</p>
                </div>
              </a>
              <a className="mt-2 md:mt-0 fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://all.checkout.tuboleta.com/selection/event/date?productId=10228374221198">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                <p>6</p>
                  <p className="text-sm">NOV</p>
                </div>
                <div className="locacion">
                  <p className="flex text-base font-bold ml-2">AGUASCLIENTES / AUDITORIO DIMO</p>
                </div>
              </a>
          

            </div>
            <div className="mt-0 md:mt-6 px-2 md:px-0 w-full flex flex-col md:flex-row flex-flow justify-center items-center">
            <a className="mt-2 md:mt-0 fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://all.checkout.tuboleta.com/selection/event/date?productId=10228374221198">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                <p>18</p>
                <p>NOV</p>
                </div>
                <div className="locacion">
                  <p className="flex text-sm font-bold ml-2">LEÓN / FORO PARUNO CENTRAL DE MÚSICA</p>
                </div>
              </a>
            <a className="mt-2 md:mt-0 fecha-card h-14 md:w-45 md:mr-2 w-11/12 shadow-2xl flex items-center px-2 pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://all.checkout.tuboleta.com/selection/event/date?productId=10228374221198">
                <div className="h-full w-20 flex flex-col text-center shadow-navbar justify-center text-white font-bold date">
                <p>19</p>
                  <p>NOV</p>
                </div>
                <div className="locacion">
                  <p className="flex text-base font-bold ml-2">SAN MIGUEL / TEATRO ÁNGELA PERALTA</p>
                </div>
              </a>

            </div>
            <div className="mt-0 md:mt-6 w-full px-2  md:px-0 flex justify-left items-left">
              
              <a className="h-14 mt-2 w-49 md:mt-0  md:mr-2 w-full w-49 shadow-2xl flex items-center pl-0 pr-0  bg-white rounded-lg" target="_blank" href="https://arema.mx/evento/7215">
              <div className="h-full date flex flex-col text-center shadow-navbar justify-center text-white font-bold date"    style={{  width: '15%'}} >
                  <p>26</p>
                    <p>NOV</p>
                  </div>
                  <div className="locacion">
                    <p className="flex text-base font-bold ml-2">TOLUCA / TEATRO DEL IMSS</p>
                  </div>
                </a>
            </div>
            
          </div>
        </section>
        </>

        )
    }
}
export default Bio;


