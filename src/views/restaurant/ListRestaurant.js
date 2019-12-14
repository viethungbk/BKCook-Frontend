/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";

class ListRestaurant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // First list of posts.
            ListClasses: [
                {
                    backgroundImage: "https://media.cooky.vn/cookingclass/s/cooky-cookingclass-cover-c290.jpg",
                    category: "Lớp Học Làm Mứt",
                    categoryTheme: "dark",
                    author: "Nguyễn Thị Yến",
                    authorAvatar: "https://media.cooky.vn/usr/g16/156892/avt/c100x100/cooky-avatar-636734886921773210.jpg",
                    title: "Lớp Học Làm Mứt: Mứt Bưởi và Mứt Chanh Dây",
                    body:
                        "Đến với lớp học bạn sẽ được học cách làm mứt bưởi thanh thanh thơm thơm, mứt chanh dây chua chua ngọt ngọt cho mâm cỗ ngày Tết. Giá cực kì ưu đãi chỉ khi bạn ĐĂNG KÝ NGAY tại Cooky !!",
                    date: "28 February 2019"
                },
                {
                    backgroundImage: "https://media.cooky.vn/cookingclass/s/cooky-cookingclass-cover-c280.jpg",
                    category: "Lớp Học Nấu Ăn",
                    categoryTheme: "info",
                    author: "Ngoc Anh",
                    authorAvatar: "https://media.cooky.vn/usr/g15/140491/avt/c100x100/cooky-avatar-636679616025696722.jpg",
                    title: "Lớp Học Nấu Ăn: Xíu Mại và Thịt Cuộn",
                    body:
                        "Bánh Mì Việt Nam có thể kết hợp với nhiều loại nhân khác nhau để tránh gây ngán và nhàm chán. Đến với lớp học này, bạn sẽ được hướng dẫn cách thức làm ra món Thịt Cuộn và Xíu Mại Sốt Cà lạ miệng để ăn kèm với bánh mì giòn rụm ngay thôi nào "
                },
                {
                    backgroundImage: "https://media.cooky.vn/cookingclass/s/cooky-cookingclass-cover-c290.jpg",
                    category: "Lớp Học Làm Mứt",
                    categoryTheme: "dark",
                    author: "Nguyễn Thị Yến",
                    authorAvatar: "https://media.cooky.vn/usr/g16/156892/avt/c100x100/cooky-avatar-636734886921773210.jpg",
                    title: "Lớp Học Làm Mứt: Mứt Bưởi và Mứt Chanh Dây",
                    body:
                        "Đến với lớp học bạn sẽ được học cách làm mứt bưởi thanh thanh thơm thơm, mứt chanh dây chua chua ngọt ngọt cho mâm cỗ ngày Tết. Giá cực kì ưu đãi chỉ khi bạn ĐĂNG KÝ NGAY tại Cooky !!",
                    date: "28 February 2019"
                },
                {
                    backgroundImage: "https://media.cooky.vn/cookingclass/s/cooky-cookingclass-cover-c280.jpg",
                    category: "Lớp Học Nấu Ăn",
                    categoryTheme: "info",
                    author: "Ngoc Anh",
                    authorAvatar: "https://media.cooky.vn/usr/g15/140491/avt/c100x100/cooky-avatar-636679616025696722.jpg",
                    title: "Lớp Học Nấu Ăn: Xíu Mại và Thịt Cuộn",
                    body:
                        "Bánh Mì Việt Nam có thể kết hợp với nhiều loại nhân khác nhau để tránh gây ngán và nhàm chán. Đến với lớp học này, bạn sẽ được hướng dẫn cách thức làm ra món Thịt Cuộn và Xíu Mại Sốt Cà lạ miệng để ăn kèm với bánh mì giòn rụm ngay thôi nào "
                },
            ],
        };
    }

    render() {
        const {
            ListClasses,
        } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Danh sách nhà hàng" subtitle="nhà hàng" className="text-sm-left" />
                </Row>

                {/* First Row of Posts */}
                <Row>
                    {ListClasses.map((post, idx) => (
                        <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
                            <Card small className="card-post card-post--1">
                                <div
                                    className="card-post__image"
                                    style={{ backgroundImage: `url(${post.backgroundImage})` }}
                                >
                                    <Badge
                                        pill
                                        className={`card-post__category bg-${post.categoryTheme}`}
                                    >
                                        {post.category}
                                    </Badge>
                                    <div className="card-post__author d-flex">
                                        <a
                                            href="#"
                                            className="card-post__author-avatar card-post__author-avatar--small"
                                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                                        >
                                            Written by {post.author}
                                        </a>
                                    </div>
                                </div>
                                <CardBody>
                                    <h5 className="card-title">
                                        <a href="#" className="text-fiord-blue">
                                            {post.title}
                                        </a>
                                    </h5>
                                    <p className="card-text d-inline-block mb-3">{post.body}</p>
                                    <span className="text-muted">{post.date}</span>
                                </CardBody>
                                <Button theme="warning" style={{ width: '60px', margin: '10px auto', padding: '10px' }}>
                                    Chi tiết
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ListRestaurant;
