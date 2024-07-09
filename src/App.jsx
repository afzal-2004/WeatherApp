/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */

import "./App.css";

import { useState } from "react";
// import axios from "axios";
import { FaSearch } from "react-icons/fa";
function App() {
  const [City, setCity] = useState("");

  const [data, setdata] = useState({});
  const Apikey = `bb13d3c6efdde5c70dfe30f891203deb`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Apikey}&units=metric`;

  // useEffect(() => {
  async function FetchData() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setdata(result);
    } catch (error) {
      console.error(error);
    }
  }

  // }, []);
  const handelClick = () => {
    if (City !== "") {
      FetchData();
    } else {
      async function FetchData() {
        try {
          setCity("jhansi");

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=jhansi&appid=${Apikey}&units=metric`
          );
          const result = await response.json();
          setdata(result);
          console.log(result.main?.temp);
        } catch (error) {
          console.error(error);
        }
      }
      FetchData();
    }
  };

  return (
    <>
      <div className="Main flex  justify-center items-center">
        <div
          className="contatiner bg-green-200   
         sm:max-w-[500px] p-3  sm:p-5 rounded-lg"
        >
          <section className=" flex  items-center gap-3 ">
            <input
              type="text"
              placeholder="SearchCity..."
              onChange={(e) => setCity(e.target.value)}
              className=" p-4 border  border-black outline-none w-full  rounded-full text-[25px]"
            />
            <div className=" bg-white p-3 rounded-full">
              <FaSearch className=" text-[30px]" onClick={handelClick} />
            </div>
          </section>
          <div className="  mt-0 flex flex-col    items-center">
            <img src="/Cloudy.png" alt="" className="  h-[250px]" />
            <p className=" text-[40px]">
              {City ? Math.round(data.main?.temp) : 0}°C
            </p>
            <p className=" text-[25px]">{City}</p>
          </div>
          <div className=" flex   justify-between mb-2">
            <section>
              <img
                src="/humidity-icon-14.jpg"
                alt=""
                className=" w-[50px]  h-[50px]"
              />
              <ul>
                <li>Himadity</li>
                <li>{data.main?.humidity}%</li>
              </ul>
            </section>
            <section>
              <img
                src="/wind-speed.jpg"
                alt=""
                className=" w-[50px]  h-[50px]"
              />
              <ul>
                <li>WindSpeed</li>
                <li>{data.wind?.speed} Km/h</li>
              </ul>
            </section>
          </div>
          <hr className=" h-[2px] bg-white" />
          <div className=" mt-3">
            <table className="   w-full">
              <thead className=" w-full  ">
                <tr className=" flex justify-between">
                  <th>Fells Like</th>
                  <th> Max temp</th>
                  <th> Min temp</th>
                  <th> Sea Level</th>
                </tr>
                <tr></tr>
              </thead>

              <tbody className=" w-full">
                <tr className=" flex justify-between">
                  <td>{data.main?.feels_like}</td>
                  <td>{data.main?.temp_max}</td>
                  <td>{data.main?.temp_min}</td>
                  <td>{data.main?.sea_level} m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
