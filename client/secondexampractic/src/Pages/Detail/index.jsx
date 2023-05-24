import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from "antd";
// import { getAlldatasID } from '../api/httpsrequests';

function Detailpage() {

  const [data, setData] = useState({})
  const params = useParams()

  const getDataById = async () => {
    const res = await axios.get(`http://localhost:7070/api/robot/${params.id}`)
    console.log(res.data);
    console.log(params.id);
    setData(res.data[0])
  }
  useEffect(() => {
    getDataById()
  }, [])

  // const { id } = useParams()
  // const [data, SetData] = useState({})
  // useEffect(() => {
  //   getAlldatasID(id)
  //     .then(res => {
  //       SetData(res)
  //     }, [id])
  // })

  return (
    <>
      <section className="robot-sec">
        <Card
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


export default Detailpage
