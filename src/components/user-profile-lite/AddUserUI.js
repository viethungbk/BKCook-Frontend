import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

const EditUserUI = () => (
  <Card style={{ width: "100%", margin: "30px", padding: "20px" }}>
    <CardHeader className="border-bottom">
      <h6 className="m-0">Thêm người sử dụng</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Tên người sử dụng</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="tên người dụng"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Số điện thoại</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Số điện thoại"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Địa chỉ</label>
                <FormInput
                  id="feAddress"
                  placeholder="Địa chỉ"
                  onChange={() => {}}
                />
              </FormGroup>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Ngày tạo tài khoản</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="Ngày tạo"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Trạng thái tài khoản</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Trạng thái tài khoản"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Miêu tả</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button theme="accent">Chỉnh sửa</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
export default EditUserUI;
