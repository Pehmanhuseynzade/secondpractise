import React from 'react'
import { Card } from 'antd';
import Button from "@mui/material/Button";

function Endsec() {
    return (
        <>
            <section className='endsec'>
                <Card
                   
                    style={{
                        width: 500,
                    }}
                    cover={<img alt="example" src="https://preview.colorlib.com/theme/robotics/img/b1.jpg" />}
                >
                    <div style={{display:"flex",gap:"15px"}}>
                        <Button
                            style={{
                                color: "white",
                                border: "none",
                                backgroundColor: "#c593ff",
                                marginTop: "12px",
                            }}
                            variant="outlined"
                        >
                            Travel
                        </Button>
                        <Button
                            style={{
                                color: "white",
                                border: "none",
                                backgroundColor: "#c593ff",
                                marginTop: "12px",
                            }}
                            variant="outlined"
                        >
                            Life Style
                        </Button>
                    </div>
                    <h2>Portable latest Fashion for young women</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <p>tempor incididunt ut labore et dolore.</p>
                    <p>31st January, 2018</p>
                </Card>
                <Card
                    
                    style={{
                        width: 500,
                    }}
                    cover={<img alt="example" src="https://preview.colorlib.com/theme/robotics/img/b2.jpg" />}
                >
                    <div style={{display:"flex",gap:"15px"}}>
                        <Button
                            style={{
                                color: "white",
                                border: "none",
                                backgroundColor: "#c593ff",
                                marginTop: "12px",
                            }}
                            variant="outlined"
                        >
                            Travel
                        </Button>
                        <Button
                            style={{
                                color: "white",
                                border: "none",
                                backgroundColor: "#c593ff",
                                marginTop: "12px",
                            }}
                            variant="outlined"
                        >
                            Life Style
                        </Button>
                    </div>
                    <h2>Portable latest Fashion for young women</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <p>tempor incididunt ut labore et dolore.</p>
                    <p>31st January, 2018</p>
                </Card>
            </section>
        </>
    )
}

export default Endsec