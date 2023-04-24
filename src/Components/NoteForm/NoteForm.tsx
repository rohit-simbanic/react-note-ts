import React, { FormEvent, useRef } from "react";
import { Form, Stack, Col, Row, Button } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { NoteData } from "../../interfaces/INoteInterfaces";
type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

const NoteForm = ({onSubmit} : NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
        title: titleRef.current.value;
        markdown: markdownRef.current.value;
        tags: []
    })
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tag">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={15} ref={markdownRef} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
