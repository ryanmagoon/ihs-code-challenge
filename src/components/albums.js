import React, { useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import PetSoundsCover from '../PetSoundsCover.jpg'
import RevolverCover from '../RevolverCover.jpg'

const revolverAlbum = {
  album: 'Revolver',
  image: RevolverCover,
  name: 'The Beatles',
  releaseYear: 1966,
  used: false,
}

const petSoundsAlbum = {
  album: 'Pet Sounds',
  image: PetSoundsCover,
  name: 'The Beach Boys',
  releaseYear: 1966,
  used: true,
}

const Albums = () => {
  // we could go individual on the fields here, but they are always going to be
  // changed together out of the same object, so not practical or useful to do so
  const [album, setAlbum] = useState(revolverAlbum)

  const switchAlbum = () => setAlbum(petSoundsAlbum)

  // took some liberties with the variable names to make the code more readable
  const { album: name, image, name: artist, releaseYear, used } = album

  return (
    <Container>
      <Row>
        <Col>
          <h2>Challenge 1: Switch Albums</h2>
          <Card
            className="Album"
            style={{ width: '18rem', display: 'inline-flex', margin: '50px' }}
          >
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Text>{name}</Card.Text>
              <Card.Text>{artist}</Card.Text>
              <Card.Text>{releaseYear}</Card.Text>
              <Card.Text>{used ? 'Used Album' : 'New Album'}</Card.Text>
              <Button variant="outline-success" onClick={switchAlbum}>
                Switch Album
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Albums
