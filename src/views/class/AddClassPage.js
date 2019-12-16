import React from "react";
import {
  Container,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import callApi from "../../utils/apiCaller";

class AddClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      className: "",
      address: "",
      startDate: "",
      shortDescription: "",
      image: "",
      startTime: "",
      endTime: "",
      classDescription: ""
    };
  }
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  
  onSave = e => {
    e.preventDefault();
    var {
      className,
      address,
      startDate,
      shortDescription,
      image,
      startTime,
      endTime,
      classDescription
    } = this.state;
    var { history } = this.props;
    let accessToken = localStorage.getItem("token");

    let headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data"
    };
    let formData = new FormData();

    formData.set("className", className);
    formData.set("address", address);
    formData.set("startDate", startDate);
    formData.set("shortDescription", shortDescription);
    formData.set("image", image);
    formData.set("startTime", startTime);
    formData.set("endTime", endTime);
    formData.set("classDescription", classDescription);

    callApi("cooking-classes", "POST", formData, headers)
      .then(res => {
        console.log("res", res);
        // history.goBack();
      })
      .catch(err => {
        console.log("err", err);
        console.log("hi");
      });
  };

  handleImage = e => {
    this.setState({
      ...this.state,
      image: e.target.files[0]
    });
  };

  render() {
    var {
      className,
      address,
      startDate,
      shortDescription,
      image,
      startTime,
      endTime,
      classDescription
    } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Thêm lớp học"
            subtitle="lớp học"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row>
          <Card style={{ width: "100%", margin: "30px", padding: "20px" }}>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Thêm lớp học</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form onSubmit={this.onSave}>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feFirstName">Tên lớp học</label>
                          <FormInput
                            id="feFirstName"
                            placeholder="tên lớp học"
                            name="className"
                            value={className}
                            onChange={this.onChange}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <div className="custom-file mb-3">
                          <input
                            type="file"
                            className="custom-file-input"
                            name="image"
                            onChange={this.handleImage}
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile2"
                          >
                            Chọn hình ảnh
                          </label>
                        </div>
                      </Row>
                      <Row form>
                        {/* Description */}
                        <Col md="12" className="form-group">
                          <label htmlFor="feDescription">Địa chỉ</label>
                          <FormTextarea
                            name="address"
                            rows="5"
                            value={address}
                            onChange={this.onChange}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* First Name */}
                        <Col md="4" className="form-group">
                          <label htmlFor="feFirstName">Ngày bắt đầu</label>
                          <FormInput
                            id="feFirstName"
                            placeholder="Đầu bếp "
                            name="startDate"
                            value={startDate}
                            onChange={this.onChange}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="4" className="form-group">
                          <label htmlFor="feLastName">
                            Thời gian bắt đầu học
                          </label>
                          <FormInput
                            id="feLastName"
                            placeholder="Trạng thái tài khoản"
                            name="startTime"
                            value={startTime}
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col md="4" className="form-group">
                          <label htmlFor="feLastName">Thời gian kết thúc</label>
                          <FormInput
                            id="feLastName"
                            placeholder="Trạng thái tài khoản"
                            name="endTime"
                            value={endTime}
                            onChange={this.onChange}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* Description */}
                        <Col md="12" className="form-group">
                          <label htmlFor="feDescription">
                            Miêu tả ngắn gọn
                          </label>
                          <FormTextarea
                            name="shortDescription"
                            value={shortDescription}
                            onChange={this.onChange}
                            rows="5"
                          />
                        </Col>
                      </Row>
                      <Row form>
                        {/* Description */}
                        <Col md="12" className="form-group">
                          <label htmlFor="feDescription">
                            Miêu tả chi tiết lớp học
                          </label>
                          <FormTextarea
                            name="classDescription"
                            value={classDescription}
                            onChange={this.onChange}
                            rows="5"
                          />
                        </Col>
                      </Row>
                      <Button theme="accent">Thêm lớp học</Button>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default AddClassPage;
