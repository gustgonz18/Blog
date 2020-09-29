import React from 'react';
import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';
import { Layout, Menu, Breadcrumb, Card, Col, Row, Divider, Skeleton } from 'antd';
import { TwitterOutlined, FacebookOutlined, YoutubeOutlined, TwitterSquareFilled } from '@ant-design/icons';
import { Form, Input, InputNumber, Button } from 'antd';



import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '150px',
  color: '#fff',
  lineHeight: '150px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%'
};
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


function App() {
  return (


    <Layout className="container">
      {/* <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Inicio</Menu.Item>
          <Menu.Item key="2">Géneros</Menu.Item>
          <Menu.Item key="3">Conciertos</Menu.Item>
        </Menu>
     </Header> */}


      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>It's hard to know where we should go -
          Polar Bear Club (Hollow Place)
              <img src="https://fondosmil.com/fondo/6405.jpg" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}>'Cause even the devil finds love - Red Sun Rising (Deathwish)<img src="https://images.hdqwalls.com/wallpapers/abstract-colorful-space-colors-art-4k-jr.jpg" /></h3>
        </div>
      </Carousel>
      <Content style={{ padding: '0 50px' }}>

        {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}

        <div className="site-layout-content2">
          <Divider orientation="left"><h2>¿Quién soy? </h2></Divider>
          <Row>
            <Col flex={2}><h3>¿Qué quién soy? Soy el Hombre Araña,... ojalá.</h3>
              <h3>Soy solo un aficionado más de la música al igual que tú, escucho música desde que tengo recuerdos, y cada día estoy en la búsqueda de más y más música
                      que escuchar.</h3>
              <h3>Acomódate, y siéntete libre de ponerte tus mejores auriculares para escuchar de la mejor música que te puedo compartir.</h3>
              <ul> <h3> En este blog podrás encontrar: </h3>
                <li> <h3>Música, duh</h3> </li>
                <li><h3> Una playlist de lo mejor que descubrí este año </h3> </li>
                <li><h3> Y más a futuro: información sobre las bandas y conciertos. ¡Estate atendo! </h3> </li>

              </ul>
            </Col>
          </Row>


        </div>

        <div className="site-layout-content">



          <br></br>
          <Row gutter={[16, 16]}>
            <Col span={8}>  <Card
              hoverable
              // style={{ width: 240 }}
              cover={<img alt="example" src="https://images-na.ssl-images-amazon.com/images/I/81W69D9XWjL._SL1400_.jpg" />}
            >
              <Meta title="Red Sun Rising" description="Rock Alternativo, Hard Rock " />
            </Card>
            </Col>
            <Col span={8}> <Card
              hoverable
              //style={{ width: 240 }}
              cover={<img alt="example" src="https://images.squarespace-cdn.com/content/v1/54749e9be4b035ef76f778db/1472392345838-9O733H3Z8M37358LCO0E/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfNdxJhjhuaNor070w_QAc94zjGLGXCa1tSmDVMXf8RUVhMJRmnnhuU1v2M8fLFyJw/image-asset.jpeg" />}
            >
              <Meta title="Polar Bear Club" description="Post-Hardcore, Punk Rock, Alternative Rock, Melodic Rock " />
            </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                // style={{ width: 240 }}
                cover={<img alt="example" src="https://www.nuclearblast.de/static/articles/271/271158.jpg/1000x1000.jpg" />}
              >
                <Meta title="Powerwolf" description="Power Metal, Heavy Metal " />
              </Card>
            </Col>
          </Row>
        </div>
        {/*<Layout>
      <Header></Header>
      <Layout>
        <Content></Content>
        <Sider></Sider>
      </Layout>
      <Footer> </Footer>
      </Layout>*/}

        <div className="divmaster">
          <div className="site-layout-content3">
            <Row>
              <Col span={16}></Col>
              <Col span={3}></Col>
              <Col flex={5}>
                <Divider orientation="left"><h2>Lo mejor del 2020</h2></Divider>
                <iframe src="https://open.spotify.com/embed/playlist/4LPnqBRhNcOCRDFTtOr2nK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></Col>
            </Row>
          </div>


          <div className="site-layout-content4">
            <Divider orientation="left"><h2>¡Compartime tu/s música/s favoritas, y si me gustan las termino subiedno a la playlist!</h2></Divider>
    
              <Form className="form" float ="center">
                <Input type="Nombre" placeholder="Déjame tu nombre"></Input>
                <br></br>
                <Input type="canciion" placeholder="Dejáme una canción o una playlist"></Input>

                <div>
                  <Input type="submit" value="Enviar" />
                </div>
              </Form>
            </div>
          </div>

      </Content>




      <Footer >
        <Divider orientation="left">¡Sígueme en mis redes sociales!</Divider>
        <Row>
          <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
            <a href="https://twitter.com/gust_gonz18"> <TwitterSquareFilled /> Twitter </a>
          </Col>
          <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
            <a href="https://www.facebook.com/gustgonz18"> <FacebookOutlined /> Facebook </a>
          </Col>
          <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
            Created by gust_gonz18
      </Col>
          <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>

          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
