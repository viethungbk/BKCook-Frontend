import React from "react";
import PropTypes from "prop-types";
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
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ userDetails }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Chi tiết người sử dụng</h6>
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
                    value={userDetails.name}
                    onChange={() => { }}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Số điện thoại</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Số điện thoại"
                    value={userDetails.phoneNumber}
                    onChange={() => { }}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Địa chỉ</label>
                <FormInput
                  id="feAddress"
                  placeholder="Địa chỉ"
                  value={userDetails.adress}
                  onChange={() => { }}
                />
              </FormGroup>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Ngày tạo tài khoản</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="Ngày tạo"
                    value={userDetails.create}
                    onChange={() => { }}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Trạng thái tài khoản</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Trạng thái tài khoản"
                    value={userDetails.status}
                    onChange={() => { }}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Miêu tả</label>
                  <FormTextarea id="feDescription" rows="5" value={userDetails.description} />
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

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  userDetails: PropTypes.string
};

UserAccountDetails.defaultProps = {
  userDetails:
  {
    id: "1",
    name: "Bờ Ka",
    description: "Tớ là Dương và được biết đến với rất nhiều cái tên khác: Gọt, Candy, Bà béo, TD… hehe… Nghề nghiệp thì tới giờ tớ cũng chưa biết sắp xếp nó vào mục gì nữa :P…  Nhưng dù sao thì tớ có sở thích là đam mê nấu ăn, thưởng thức đồ ăn và đặc biệt là cả café nữa ^^… Theo tớ, nấu ăn không có một công thức chuẩn nào cả vì mỗi người sẽ tự tìm cho mình cách nấu ăn riêng, k ai giống ai. Nó phụ thuộc nhiều vào cảm nhận của mỗi người về món ăn, vào các nguyên liệu, công cụ mà bạn có cũng như điều kiện về không gian và thời gian nữa., và tất nhiên là cả cảm xúc của bạn khi nấu ^^…Cook as you feel… Hãy nấu như bạn cảm nhận về món ăn đó nhé!",
    image: "https://icdn.dantri.com.vn/thumb_w/640/2018/5/23/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    create: "10/11/2019",
    phoneNumber: "0178273644",
    adress: "Kí túc xá đại học Bách Khoa",
    status: "action"
  },
};

export default UserAccountDetails;
