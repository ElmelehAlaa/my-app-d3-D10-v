import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MyDetailsShow = (props) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  console.log(params.imdbID);
  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.imdbID, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAxYjhiNzgxNjRmMjAwMTRhNzJjZTUiLCJpYXQiOjE2OTQ2MTE2MzksImV4cCI6MTY5NTgyMTIzOX0.kRxWHlL3Nfvpgm0labkjfklhVQGJk7YSuhmu2npuL8k",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data);
        setIsLoading(false);
      } else {
        console.log("error");
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [params.imdbID]);

  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" className="w-100 object-fit" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyDetailsShow;
