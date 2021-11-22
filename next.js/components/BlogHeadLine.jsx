import { Row, Col } from "antd";

export default function BlogHeadLine() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col
        style={{
          fontSize: 40,
          fontWeight: 800,
        }}
      >
        Dkim's Blog
      </Col>
    </Row>
  );
}
