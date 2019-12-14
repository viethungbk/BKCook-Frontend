import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

const NewDraft = ({ title }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0" style={{ fontSize: '20px', margin: '15px' }}>{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form" style={{ padding: '15px', fontSize: '20px' }}>
        {/* Title */}
        <FormGroup>
          <FormInput placeholder="Brave New World" style={{ padding: '15px', fontSize: '18px' }}/>
        </FormGroup>

        {/* Body */}
        <FormGroup>
          <FormTextarea placeholder="Words can be like X-rays if you use them properly..." style={{ padding: '15px', fontSize: '18px' }} />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit" style={{ padding: '15px', fontSize: '18px' }}>
            Create Draft
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewDraft.defaultProps = {
  title: "New Draft"
};

export default NewDraft;
