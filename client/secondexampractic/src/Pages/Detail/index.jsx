//import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from "antd";
import { getAlldatasID } from '../../api/httpsrequests';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Detail() {
  const navigate = useNavigate();

  const { id } = useParams()
  const [data, SetData] = useState({})
  useEffect(() => {
    getAlldatasID(id)
      .then(res => {
        SetData(res)
      }, [id])
  })

  return (
    <>
          <Link onClick={() => {
        navigate('/robot');
      }} ><Button style={{ margin: "80px 40px",zIndex:"999" }} variant="contained" color='error'>Go Back</Button></Link>
      <section className="robot-sec">
        <Card
        key={data._id}
          className="robotcard"
          hoverable="true"
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src={data.imageURL}
            />
          }
        >
          <p >
            Name: <span>{data.name}</span>
          </p>
          <p>
            Price: <span>{data.price}</span>
          </p>
          <p>{data.description}</p>
        </Card>
      </section>
    </>
  )
}


export default Detail
