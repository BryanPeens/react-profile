import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JavaScript from '../assets/images/javascript.png';
import ReactImg from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import GitHub from '../assets/images/github.png';
import Tailwind from '../assets/images/tailwind.png';
import AWS from '../assets/images/aws.png';

const Skills = () => {
  return (
    <div name='skills' className='w-[98%] flex items-center justify-center'>
      <Container className='max-w-screen-xl mx-auto p-4'>
        <Row className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={HTML} alt="HTML icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={CSS} alt="CSS icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={ReactImg} alt="React icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={GitHub} alt="GitHub icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={Node} alt="Node.js icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
          </Col>
          <Col className='shadow-md hover:scale-110 duration-500 p-2'>
            <Image className='w-16 sm:w-20 mx-auto' src={AWS} alt="AWS icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
