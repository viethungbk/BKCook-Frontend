import React from "react";
import { Container, Row, Col } from "shards-react";

class Demo extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            lg="6"
            className="mb-8"
            style={{ width: "30%", marginRight: "2%", background: "white" }}
          >
            <img
              src={require("../images/admin.jpg")}
              style={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "10px"
              }}
            ></img>
            <div
              style={{
                height: "70px",
                paddingTop: "20px",
                textAlign: "center"
              }}
            >
              <h3>Header</h3>
            </div>
          </Col>
          <Col
            lg="4"
            className="mb-4"
            style={{ width: "30%", background: "white" }}
          >
            <div
              style={{
                height: "70px",
                paddingTop: "20px"
              }}
            >
              <h6>Material</h6>
            </div>
            <Row>
              <Col style={{ marginLeft: "30px" }}>
                <ol style={{ margin: "0", padding: "0" }}>
                  <li style={{ padding: "10px", marginLeft: "20px" }}>
                    abcbsdssssssssss
                  </li>
                  <li style={{ padding: "10px", marginLeft: "20px" }}>
                    abcbsdssssssssss
                  </li>
                  <li style={{ padding: "10px", marginLeft: "20px" }}>
                    abcbsdssssssssss
                  </li>
                </ol>
              </Col>
            </Row>
            <p>
              😆 Đói thì phải ăn, khát thì phải uống, các nhà khoa học gọi đó là
              định luật bảo toàn tính mạng
            </p>
            <p> 😊 Tôi chỉ muốn hai điều: Giảm cân và ăn </p>
          </Col>
        </Row>
        <Row>
          <Col
            lg="6"
            className="mb-8"
            style={{ width: "30%", marginTop: "5%", background: "white" }}
          >
            <ul style={{ margin: "0", padding: "0", listStyleType: "none" }}>
              <li>
                <span style={{ fontSize: "18px" }}>
                  <b>Bước 1 </b> : Miểu tả
                </span>
                <br></br>
                <img
                  style={{
                    width: "60%",
                    marginLeft: "20%",
                    marginRight: "20%",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Demo;
