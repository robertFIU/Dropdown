import { useNavigate } from "react-router-dom";
import '../App.css';
import { useParams} from 'react-router-dom'
import {Row, Col, Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap'
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as CaretIcon } from './caret.svg';
import { ReactComponent as ArrowIcon } from './arrow.svg';



function Professor() {
    function Keywords(){
        if(keywords){
            
            return(
                <div  className="d-inline">
                <input  className="keyword-container d-inline" >

                </input>
                </div>
               
            )
        }else{
            return(<div></div>  )
        }
            
    }
    
    const [keywords, setKeywords] = useState(false)
    const [checked, setChecked] = useState('d-none')

    function handleCheck(){
        if(keywords == false){
            setKeywords(true)
        }else{
            setKeywords(false)
        }
        console.log(keywords)
    }
    
    useEffect(()=>{
        
    }, [] )
    return(
        <div className="Upload container" >
            <Row >
                
                <Col lg={5} style={{padding: '2em'}}>
                    <h2>Question</h2>
                    <div className="shadow" >
                        <textarea style={{height: "9.5em"}} placeholder="Type in your question...">

                        </textarea>
                    </div>
                    <hr style={{margin: "3em 0"}}>
                    </hr>
                    <h2>Preferences</h2>
                </Col>
                <Col lg={7} style={{padding: '2em'}} >
                    <h2>Answer</h2>
                    <div className="shadow" >
                        <textarea style={{height: "9.5em"}} placeholder="Type in the correct essay response...">

                        </textarea> 
                    </div>
                    <br></br>
                    <div className="topics" style={{paddingLeft:'2em'}}>
                    <Item icon="Select a topic:">
                      <DropdownMenu></DropdownMenu>
                    </Item>
        <h4 className="d-inline"> Topics: </h4> 
        <DropdownButton as={ButtonGroup} title="Select a topic..." style={{padding:'0 .5em', position: "relative", bottom: '.2em'}}>
        <Dropdown.Item eventKey="1">Issue</Dropdown.Item>
        <Dropdown.Item eventKey="2">Rule</Dropdown.Item>
        <Dropdown.Item eventKey="3">Policy</Dropdown.Item>
        <Dropdown.Item eventKey="4">Inference</Dropdown.Item>
        <Dropdown.Item eventKey="5">Application</Dropdown.Item>
        <Dropdown.Item eventKey="6">Conclusion</Dropdown.Item>
        <Dropdown.Item eventKey="7">Other</Dropdown.Item>

        </DropdownButton>
        <div className="shadow" >
            <textarea style={{height: "3.5em"}}>

            </textarea> 
        </div>
        <Row>
            <Col sm={4}>
        <div className="form-check d-inline" style={{width: 'fit-content', padding:'0 .5em'}}>
    <input className="form-check-input" type="checkbox" value="" onChange={handleCheck}  style={{ marginLeft:'2em'}} />
    <label className="form-check-label" >
            Keywords
    </label>
    </div>
       </Col>
    <Col>
    <Keywords  display ={keywords}/>
    </Col>
    </Row>
        </div>
                </Col>
            </Row>
        </div>
    )
  
}

function Item(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>
              Issue
            </DropdownItem>
            <DropdownItem>
              Rule
            </DropdownItem>
            <DropdownItem>
              Policy
            </DropdownItem>
            <DropdownItem>
              Inference
            </DropdownItem>
            <DropdownItem>
              Application
            </DropdownItem>
            <DropdownItem>
              Conclusion
            </DropdownItem>
            <DropdownItem goToMenu="other">
              Other
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'other'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <Item icon={<ArrowIcon />} />
            </DropdownItem>
            <DropdownItem>Input Info:</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'contracts'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h2>Contracts</h2>
            </DropdownItem>
            <DropdownItem>Damages</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

export default Professor;
