import Card from 'react-bootstrap/Card';

function News() {
  return (
    <Card style={{borderRadius:"0", width: '100%',backgroundColor:"#013A63" ,color:"white"}}>
      <Card.Body style={{marginLeft:"140px",marginRight:"140px"}}>
        <Card.Title >Heading H1</Card.Title>
        <Card.Subtitle className="mb-2 text-light">Heading 2</Card.Subtitle>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default News;
