import React from 'react'
import Card from 'react-bootstrap/Card';

const Player = ({name,nationality,team, jerseyNumber,age,imageurl}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageurl}/>
    <Card.Body>
      <Card.Title>name:{name}</Card.Title>
      <Card.Text>
     nationality:{nationality}<br/>
     team:{team}<br/>
      jrseyNumber:{jerseyNumber}<br/>
      age:{age}<br/>
      
      </Card.Text>
    </Card.Body>
  </Card>
      
    
  )
}

export default Player
