import React from 'react';
import { Col, Layout, Row, Typography, Menu, Grid  } from 'antd';
import brain from '../images/brainart.jpg'
const { Title, Paragraph } = Typography;


function Home() {
    const imageStyle = { "border-radius": "50%" }
    const textStyle = { textAlign: "left"}
    return (
      <div>
        <br/> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row gutter={32} justify="center">
            <Col span={8}>
                <img style={imageStyle} width="400" height="400" src={brain} />
            </Col>
            <Col span="8">
            <br/>
            <br/>
            <br/>
            <br/>
              <Title level={1} style={textStyle}> Dumelang </Title>
              <Title level={5} style={textStyle}> A Bit About Me </Title>
                <Row justify={"start"}>
                  <Col span="14">
                    <Paragraph style={textStyle}>
                        I'm a paragraph. Click here to add your own text and edit me. 
                        I’m a great place for you to tell a story and let your users know 
                        a little more about you.
                    </Paragraph>
                  </Col>
                </Row>
                <Row>
                  <Col span="8">
                    <div className='circle-components' id='resume'> <strong> Resume </strong>  </div>
                  </Col>
                  <Col span="8">
                    <div className='circle-components' id='projects'> <strong> Projects </strong> </div>
                  </Col>
                  <Col span="8">
                    <div className='circle-components' id='contact'> <strong> Contact </strong>  </div>
                  </Col>
                </Row>
            </Col>
        </Row>
      </div>
    );
  }
  
  export default Home;