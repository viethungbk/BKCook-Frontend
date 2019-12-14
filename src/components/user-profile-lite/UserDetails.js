import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.image}
          alt={userDetails.name}
          width="250"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.description}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.contact}
          >
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails:
  {
    id: "1",
    name: "Bờ Ka",
    description: "Tớ là Dương và được biết đến với rất nhiều cái tên khác: Gọt, Candy, Bà béo, TD… hehe… Nghề nghiệp thì tới giờ tớ cũng chưa biết sắp xếp nó vào mục gì nữa :P…  Nhưng dù sao thì tớ có sở thích là đam mê nấu ăn, thưởng thức đồ ăn và đặc biệt là cả café nữa ^^… Theo tớ, nấu ăn không có một công thức chuẩn nào cả vì mỗi người sẽ tự tìm cho mình cách nấu ăn riêng, k ai giống ai. Nó phụ thuộc nhiều vào cảm nhận của mỗi người về món ăn, vào các nguyên liệu, công cụ mà bạn có cũng như điều kiện về không gian và thời gian nữa., và tất nhiên là cả cảm xúc của bạn khi nấu ^^…Cook as you feel… Hãy nấu như bạn cảm nhận về món ăn đó nhé!",
    image: "https://icdn.dantri.com.vn/thumb_w/640/2018/5/23/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    create: "10/11/2019",
    contact: "0178273644",
    status: "action"
  },
};

export default UserDetails;
