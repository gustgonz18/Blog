import React from 'react';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Card, Col, Row, Divider, Skeleton } from 'antd';


function Card (props) {
    return(
            <Col span={8}>  <Card
            hoverable
            cover={<img alt="banda" src={props.card.imagen} />}
          >
            <Meta title={props.card.titulo} description= {props.card.description} />
          </Card>
          </Col>

    )
}

export default Card;