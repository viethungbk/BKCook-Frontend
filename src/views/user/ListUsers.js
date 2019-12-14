import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import PageTitle from "../../components/common/PageTitle";


const ListUsers = ({ userOne }) => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
            <PageTitle title="Danh sách người dùng" subtitle="người dùng" className="text-sm-left mb-3" />
        </Row>
        <Row>
            <Col>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">View recipe bkcook</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col" className="border-0">
                                        Số thứ tự
                  </th>
                                    <th scope="col" className="border-0">
                                        tên người sử dụng
                  </th>
                                    <th scope="col" className="border-0">
                                        Hình ảnh
                  </th>
                                    <th scope="col" className="border-0">
                                        Giới thiệu
                  </th>
                                    <th scope="col" className="border-0">
                                        Liên hệ
                  </th>
                                    <th scope="col" className="border-0">
                                        Ngày tạo
                  </th>
                                    <th scope="col" className="border-0">
                                        Trạng thái
                  </th>
                                </tr>
                            </thead>
                            {userOne.map((user, idx) => (
                                <tbody key={idx}>
                                    <tr>
                                        <td>1</td>
                                        <td>{user.name}</td>
                                        <td><img
                                            src={user.image}
                                            width="180"
                                            height="150"
                                            style={{ marginRight: '10px' }}
                                        /></td>
                                        <td>{user.description}</td>
                                        <td>{user.contact}</td>
                                        <td>{user.create}</td>
                                        <td>
                                            <Button>
                                                {user.status}
                                            </Button>
                                        </td>
                                        <td>
                                            <Button theme="secondary" style={{ width: '60px', margin: '5px', padding: '5px' }}>
                                                Chi tiết
                      </Button><br></br>
                                            <Button theme="warning" style={{ width: '60px', margin: '5px', padding: '5px' }}>
                                                Chỉnh sửa
                      </Button><br></br>
                                            <Button theme="danger" style={{ width: '60px', margin: '5px', padding: '5px' }}>
                                                Xóa
                      </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

ListUsers.propTypes = {
    userOne: PropTypes.array,
};

ListUsers.defaultProps = {
    userOne: [
        {
            id: "1",
            name: "Bờ Ka",
            description: "Tớ là Dương và được biết đến với rất nhiều cái tên khác: Gọt, Candy, Bà béo, TD… hehe… Nghề nghiệp thì tới giờ tớ cũng chưa biết sắp xếp nó vào mục gì nữa :P…  Nhưng dù sao thì tớ có sở thích là đam mê nấu ăn, thưởng thức đồ ăn và đặc biệt là cả café nữa ^^… Theo tớ, nấu ăn không có một công thức chuẩn nào cả vì mỗi người sẽ tự tìm cho mình cách nấu ăn riêng, k ai giống ai. Nó phụ thuộc nhiều vào cảm nhận của mỗi người về món ăn, vào các nguyên liệu, công cụ mà bạn có cũng như điều kiện về không gian và thời gian nữa., và tất nhiên là cả cảm xúc của bạn khi nấu ^^…Cook as you feel… Hãy nấu như bạn cảm nhận về món ăn đó nhé!",
            image: "https://icdn.dantri.com.vn/thumb_w/640/2018/5/23/net-cuoi-be-gai-9-1527053440039156820618.jpg",
            create: "10/11/2019",
            contact: "0178273644",
            status: "action"
        }
    ],
};
export default ListUsers;
