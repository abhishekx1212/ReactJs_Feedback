import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import {Button,Card, Col, Container, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'
import FormNav from '../partials/FormNav';

const Feedback = () => {
  
  const [feedObj,setFeed] = useState({});  
  const [star,setStar] = useState(0);
  const [listFeed,setListFeed] = useState([])   

  const handInput = (e) => {
    let {name,value}  = e.target 
    setFeed({...feedObj,[name]:value})  
  }  

  const handleStar = (n)=>{
    setStar(n)
    setFeed({...feedObj,['star']:n})
  }

  const handleSubmit = ()=>{
    let newVal = [...listFeed,feedObj]
    setListFeed(newVal);
    console.log(newVal);
    
    setStar(0)
    setFeed({})    
  }

  return (
    <div>
        <Container>
            <FormNav/>
            <Row lg={1} style={{justifyContent:"center"}} className='mb-4' >
                <Col lg={4} >
                    <div className="form-container">
                        <div className="form">
                        <h3 style={{color:"#717171"}} >Feedback form</h3>
                            <div className="form-group-1">
                                <label className='me-2' >Rate:</label>
                                <span>
                                {
                                    [1,2,3,4,5].map((val,i)=>(
                                     <FaStar fontSize={"18px"} color={star >= val? "yellow" : "gray"} onMouseOver={()=>handleStar(val)} key={i} />
                                    ))
                                }
                                </span>
                            </div>
                            <div className="form-group">
                                <label>Feedback:</label>
                                <textarea cols="50" rows="10" name="feedback" onChange={handInput} value={feedObj.feedback || ""} />
                            </div>
                            <button onClick={handleSubmit} className="form-submit-btn">Submit</button>
                        </div>
                    </div>
                </Col>
                <Col lg={8}>
                    <Row lg={2} className='gy-3' >
                    {
                        listFeed.map((val,i)=>(
                            <Col className='' >
                                <div class="notification">
                                    <div class="notiglow"></div>
                                    <div class="notiborderglow"></div>
                                    <div class="notititle">
                                    {
                                        [1,2,3,4,5].map((InVal,i)=>(
                                            <FaStar color={val.star >= InVal? "yellow" : "gray"} key={i} />
                                        ))
                                    }
                                    </div>
                                    <div class="notibody">{val.feedback}</div>
                                </div>
                            </Col>
                        ))
                    }                        
                    </Row> 
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Feedback
