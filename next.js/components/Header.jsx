import { Row, Col } from "antd";
import Link from "next/link";
import { FireOutlined, GithubFilled } from "@ant-design/icons";

export default function Header() {
  return (
    <div>
      <Row align="middle" style={{ height: 64 }}>
        <Col span={12}>
          <Link href="/">
            <a>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                <FireOutlined /> DKim.log
              </div>
            </a>
          </Link>
        </Col>
        <Col span={12}>
          <a
            href="https://github.com/daeseongkim05"
            style={{
              float: "right",
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              <GithubFilled /> Github
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}
