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

const DetailClassUI = ({ classDetail }) => (
    <Card style={{ width: '100%', margin: '30px', padding: '20px' }}>
        <CardHeader className="border-bottom">
            <h6 className="m-0">Chi tiết lớp học</h6>
        </CardHeader>
        <ListGroup flush>
            <ListGroupItem className="p-3">
                <Row>
                    <Col>
                        <Form>
                            <Row form>
                                <Col md="6" className="form-group">
                                    <label htmlFor="feFirstName">Tên lớp học</label>
                                    <FormInput
                                        id="feFirstName"
                                        placeholder="tên người dụng"
                                        value={classDetail.title}
                                        onChange={() => { }}
                                    />
                                </Col>
                                <Col md="6" className="form-group">
                                    <label htmlFor="feLastName">Loại lớp học</label>
                                    <FormInput
                                        id="feLastName"
                                        placeholder="Loại lớp học"
                                        value={classDetail.category}
                                        onChange={() => { }}
                                    />
                                </Col>
                            </Row>
                            <Row form>
                                <Col md="6" className="form-group">
                                    <label htmlFor="feFirstName" style={{ marginRight: '20px' }}>Hình ảnh lớp học: </label>
                                    <img
                                        src={classDetail.image}
                                        alt={classDetail.title}
                                        width="300"
                                    />
                                </Col>
                            </Row>
                            <FormGroup>
                                <label htmlFor="feAddress">Địa chỉ</label>
                                <FormInput
                                    id="feAddress"
                                    placeholder="Địa chỉ"
                                    value={classDetail.adress}
                                    onChange={() => { }}
                                />
                            </FormGroup>
                            <Row form>
                                {/* First Name */}
                                <Col md="6" className="form-group">
                                    <label htmlFor="feFirstName">Đầu bếp</label>
                                    <FormInput
                                        id="feFirstName"
                                        placeholder="Đầu bếp "
                                        value={classDetail.author}
                                        onChange={() => { }}
                                    />
                                </Col>
                                <Col md="6" className="form-group">
                                    <label htmlFor="feFirstName" style={{ marginRight: '20px' }}>Hình ảnh đầu bếp: </label>
                                    <img
                                        src={classDetail.authorAvatar}
                                        alt={classDetail.author}
                                        width="180"
                                    />
                                </Col>
                            </Row>
                            <Row form>
                                {/* First Name */}
                                <Col md="6" className="form-group">
                                    <label htmlFor="feFirstName">Ngày học</label>
                                    <FormInput
                                        id="feFirstName"
                                        placeholder="Đầu bếp "
                                        value={classDetail.date}
                                        onChange={() => { }}
                                    />
                                </Col>
                                {/* Last Name */}
                                <Col md="6" className="form-group">
                                    <label htmlFor="feLastName">Trạng thái tài khoản</label>
                                    <FormInput
                                        id="feLastName"
                                        placeholder="Trạng thái tài khoản"
                                        value={classDetail.status}
                                        onChange={() => { }}
                                    />
                                </Col>
                            </Row>
                            <Row form>
                                {/* Description */}
                                <Col md="12" className="form-group">
                                    <label htmlFor="feDescription">Miêu tả lớp học</label>
                                    <FormTextarea id="feDescription" rows="5" value={classDetail.description} />
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

DetailClassUI.propTypes = {
    /**
     * The component's title.
     */
    classDetail: PropTypes.string
};

DetailClassUI.defaultProps = {
    classDetail:
    {
        image: "https://media.cooky.vn/cookingclass/s/cooky-cookingclass-cover-c290.jpg",
        category: "Lớp Học Làm Mứt",
        categoryTheme: "dark",
        author: "Nguyễn Thị Yến",
        authorAvatar: "https://media.cooky.vn/usr/g16/156892/avt/c100x100/cooky-avatar-636734886921773210.jpg",
        title: "Lớp Học Làm Mứt: Mứt Bưởi và Mứt Chanh Dây",
        adress: "Số 2 Lê trọng Tấn, Thanh Xuân, Hà Nội",
        description:
            "Đến với lớp học bạn sẽ được học cách làm mứt bưởi thanh thanh thơm thơm, mứt chanh dây chua chua ngọt ngọt cho mâm cỗ ngày Tết. Giá cực kì ưu đãi chỉ khi bạn ĐĂNG KÝ NGAY tại Cooky !!",
        date: "28 February 2019",
        status: "action"
    },
};

export default DetailClassUI;
