import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState<{ [key: number]: string }>({});

  const handleResponseChange = (index: number, value: string) => {
    setResponses({ ...responses, [index]: value });
  };

  const sendResponse = async (index: number) => {
    if (!responses[index] || responses[index].trim() === "") {
      alert("Please enter a response before submitting.");
      return;
    }

    const responsePayload = {
      query: queries[index].message,
      response: responses[index],
      userName: queries[index].name,
      userEmail: queries[index].email,
    };

    try {
      const res = await fetch("/api/sendResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responsePayload),
      });

      const data = await res.json();
      if (data.status === 200) {
        alert("Response sent successfully.");
        setResponses({ ...responses, [index]: "" });
        fetchQueries();
      } else {
        alert("There was an error sending your response. Please try again.");
      }
    } catch (error) {
      console.error("Error sending response", error);
      alert("An error occurred. Please try again.");
    }
  };

  const fetchQueries = async () => {
    try {
      const res = await fetch("/api/getQueries");
      const data = await res.json();
      setQueries(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching queries", error);
      setLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  useEffect(() => {
    // Fetch queries from the backend
    fetchQueries();
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="queryDiv">
      <h1>
        <strong>Queries Received </strong>
      </h1>
      <div className="queries">
        {queries?.map((query: any, index: number) => (
          <div className="query" key={index}>
            <p>
              <strong>Name </strong> : {query.name}
            </p>
            <p>
              <strong>From</strong> : {query.state}
            </p>
            <p>
              <strong>Phone No.</strong> : {query.phone} &nbsp;{" "}
              <Button variant="light" onClick={() => handleCopy(query.phone)}>
                <i className="fa-regular fa-copy"></i>
              </Button>
            </p>
            <p>
              <strong>Email</strong> : {query.email} &nbsp;{" "}
              <Button variant="light" onClick={() => handleCopy(query.email)}>
                <i className="fa-regular fa-copy"></i>
              </Button>
            </p>
            <p>
              <strong>Query</strong> : {query.message}
            </p>
            <Form>
              <Form.Group className="mb-3" controlId={`response-${index}`}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Send Response..."
                  value={responses[index] || ""}
                  onChange={(e) => handleResponseChange(index, e.target.value)}
                />
              </Form.Group>
              <Button
                variant="warning"
                type="button"
                onClick={() => sendResponse(index)}
              >
                Send Response
              </Button>
            </Form>
          </div>
        ))}
        <div className="query">
          <p>
            <strong>Name </strong> : Abhishek Gupta
          </p>
          <p>
            <strong>From</strong> : Rajasthan
          </p>
          <p>
            <strong>Phone No.</strong> : 9239232328 &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Email</strong> : abc@gmail.com &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Query</strong> : Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit, in quam quibusdam necessitatibus deleniti
            expedita ut beatae eaque veritatis obcaecati iure adipisci non neque
            porro quos. Nihil exercitationem repellendus dicta!
          </p>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Send Response..."
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Send Response
            </Button>
          </Form>
        </div>
        <div className="query">
          <p>
            <strong>Name </strong> : Abhishek Gupta
          </p>
          <p>
            <strong>From</strong> : Rajasthan
          </p>
          <p>
            <strong>Phone No.</strong> : 9239232328 &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Email</strong> : abc@gmail.com &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Query</strong> : Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit, in quam quibusdam necessitatibus deleniti
            expedita ut beatae eaque veritatis obcaecati iure adipisci non neque
            porro quos. Nihil exercitationem repellendus dicta!
          </p>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Send Response..."
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Send Response
            </Button>
          </Form>
        </div>
        <div className="query">
          <p>
            <strong>Name </strong> : Abhishek Gupta
          </p>
          <p>
            <strong>From</strong> : Rajasthan
          </p>
          <p>
            <strong>Phone No.</strong> : 9239232328 &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Email</strong> : abc@gmail.com &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Query</strong> : Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit, in quam quibusdam necessitatibus deleniti
            expedita ut beatae eaque veritatis obcaecati iure adipisci non neque
            porro quos. Nihil exercitationem repellendus dicta!
          </p>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Send Response..."
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Send Response
            </Button>
          </Form>
        </div>{" "}
        <div className="query">
          <p>
            <strong>Name </strong> : Abhishek Gupta
          </p>
          <p>
            <strong>From</strong> : Rajasthan
          </p>
          <p>
            <strong>Phone No.</strong> : 9239232328 &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Email</strong> : abc@gmail.com &nbsp;{" "}
            <Button variant="light">
              <i className="fa-regular fa-copy"></i>
            </Button>
          </p>
          <p>
            <strong>Query</strong> : Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit, in quam quibusdam necessitatibus deleniti
            expedita ut beatae eaque veritatis obcaecati iure adipisci non neque
            porro quos. Nihil exercitationem repellendus dicta!
          </p>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Send Response..."
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Send Response
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Queries;
