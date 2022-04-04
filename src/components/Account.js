import React , {useState} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';



const Account = () =>{

const [details, setDetails] = useState({ username: "", email: "" });
  

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/authUsers/getUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
      }),
    });
    const json = await response.json( details.username,details.email );
    console.log(json);

    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token");
      
      
    } 
  };
  const onchange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };




  
    return (
        <Container>
        <Row>
       <Col>
       
       </Col>
        <Col>
        <Form onClick={handleClick}>
            <h1>User Profile</h1>
            <Form className="form">     
    
  <Form.Group controlId="formCategory1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" value={details.username} onChange={onchange} />
  
  </Form.Group>
  <Form.Group controlId="formCategory2">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" value={details.email} onChange={onchange}  />
  
  </Form.Group>
 
  
  </Form>
  </Form>
   </Col>

       </Row>
        </Container>
    )
    }

export default Account;
