import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card } from "antd";
import { useEffect } from "react";
import { getAlldatas } from "../../api/httpsrequests";

function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getAlldatas().then((data) => {
      setDatas(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <main>
        <div className="image-hero">
          <div className="main-words">
            <h1>Improved</h1>
            <h1>Production level</h1>
            <h1>with Robotics</h1>
            <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
            <Button
              style={{
                color: "black",
                border: "none",
                backgroundColor: "white",
                marginTop: "12px",
              }}
              variant="outlined"
            >
              VIEW DETAILS
            </Button>
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/robotics/img/banner-img.png.webp"
              alt="robot"
            />
          </div>
        </div>
      </main>

      <div style={{ padding: "60px" }}>
        <h1 style={{ textAlign: "center" }}>
          Featured Robotics Products to Show
        </h1>
        <p style={{ color: "gray", textAlign: "center" }}>
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      <section className="robot-sec">
        {datas &&
          datas.map((d) => (
            <Card
            className="robotcard"
              hoverable="true"
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src={d.imageURL}
                />
              }
            >
              <p>
                Name: <span>{d.name}</span>
              </p>
              <p>
                Price: <span>{d.price}</span>
              </p>
              <p>{d.description}</p>
            </Card>
          ))}
      </section>


      <section className="robot-head">
          <div><img src="https://preview.colorlib.com/theme/robotics/img/about-img.png" alt="robot" /></div>
          <div className="robot-head-word">
               <h1>Globally Connected</h1>
               <h1>by Large Network</h1>
               <p style={{marginTop:"15px"}}>We are here to listen from you deliver exellence</p>

               <p style={{marginTop:"15px"}} className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
               <p className="p">eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim</p>
               <p className="p">ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
               <p className="p">do eiusmod tempor.</p>
               <Button
              style={{
                color: "white",
                border: "none",
                backgroundColor: "#c593ff",
                marginTop: "12px",
              }}
              variant="outlined"
            >
              VIEW DETAILS
            </Button>
          </div>
      </section>
    </>
  );
}

export default Home;
