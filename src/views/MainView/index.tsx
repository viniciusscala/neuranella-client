import React, { ReactElement } from 'react';
import {
  Upload,
  Button,
  Menu,
  Switch,
  Slider,
  InputNumber,
  Row,
  Col,
} from 'antd';
import {
  FileOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Container,
  SideBar,
  Title,
  TopMenu,
  TopMenuSection,
  TopMenuSectionTitle,
  SwitchContainer,
  SliderContainer,
  Graphs,
} from './styles';

const { SubMenu } = Menu;

const data = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 11 },
  { name: '16', uv: -186, pv: 107 },
  { name: '17', uv: -16, pv: 926 },
  { name: '18', uv: -125, pv: 653 },
  { name: '19', uv: 222, pv: 366 },
  { name: '20', uv: 372, pv: 486 },
  { name: '21', uv: 182, pv: 512 },
  { name: '22', uv: 164, pv: 302 },
  { name: '23', uv: 316, pv: 425 },
  { name: '24', uv: 131, pv: 467 },
  { name: '25', uv: 291, pv: -190 },
  { name: '26', uv: -47, pv: 194 },
  { name: '27', uv: -415, pv: 371 },
  { name: '28', uv: -182, pv: 376 },
  { name: '29', uv: -93, pv: 295 },
  { name: '30', uv: -99, pv: 322 },
  { name: '31', uv: -52, pv: 246 },
  { name: '32', uv: 154, pv: 33 },
  { name: '33', uv: 205, pv: 354 },
  { name: '34', uv: 70, pv: 258 },
  { name: '35', uv: -25, pv: 359 },
  { name: '36', uv: -59, pv: 192 },
  { name: '37', uv: -63, pv: 464 },
  { name: '38', uv: -91, pv: -2 },
  { name: '39', uv: -66, pv: 154 },
  { name: '40', uv: -50, pv: 186 },
];

function MainView(): ReactElement {
  const handleFileSelected = (e: any): void => {
    const files = Array.from(e.target.files);
    console.log('files:', files);
  };

  return (
    <Container>
      <SideBar>
        <Title>Neuranella</Title>
        <Menu
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => { }}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<FileOutlined />} title="Files">
            <Menu.Item key="1">file.inf</Menu.Item>
            <Menu.Item key="2">file.json</Menu.Item>
          </SubMenu>
          <input onChange={handleFileSelected} type="file" multiple />
        </Menu>
      </SideBar>
      <TopMenu>
        <TopMenuSection>
          <TopMenuSectionTitle>Title</TopMenuSectionTitle>
          <SwitchContainer>
            <Switch />
            Whitening observation
          </SwitchContainer>
          <SwitchContainer>
            <Switch />
            Cut of filter (20 - 500 Hz)
          </SwitchContainer>
        </TopMenuSection>
        <TopMenuSection>
          <TopMenuSectionTitle>Data length (s)</TopMenuSectionTitle>
          <Row>
            <SliderContainer>
              <InputNumber style={{ width: '50px' }} />
              <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
              <InputNumber style={{ width: '50px' }} />
            </SliderContainer>
            Tota: 14 s
          </Row>
        </TopMenuSection>
        <TopMenuSection>
          <TopMenuSectionTitle>Title</TopMenuSectionTitle>
          <SwitchContainer>
            Number of interactions
            <InputNumber style={{ width: '50px' }} />
          </SwitchContainer>
          <SwitchContainer>
            Extension factor
            <InputNumber style={{ width: '50px' }} />
          </SwitchContainer>
        </TopMenuSection>
        <TopMenuSection>
          <TopMenuSectionTitle>Actions</TopMenuSectionTitle>
          <Button type="primary">Decompose</Button>
          <Button>Save</Button>
        </TopMenuSection>
      </TopMenu>
      <Graphs>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Graphs>
    </Container>
  );
}

export default MainView;
