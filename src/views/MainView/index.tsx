/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React, { ReactElement, useState } from 'react';
import {
  Upload,
  Button,
  Menu,
  Switch,
  Slider,
  InputNumber,
  Row,
  Col,
  Spin,
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
import axios from 'axios';
import Blob from 'blob';
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
  FileInput,
} from './styles';

const { SubMenu } = Menu;

function MainView(): ReactElement {
  const [files, setFiles] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState<[number, number]>([0, (300000 / 30000)]);
  let data: number[] = [];

  const handleFileSelected = async (e: any) => {
    setFiles(Array.from(e.target.files));
    console.log('files:', Array.from(e.target.files));
  };

  const handleDecompose = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      const binFile = files.find((file: any) => file.name.includes('.bin') || file.name.includes('.BIN'));
      const jsonFile = files.find((file: any) => file.name.includes('.json') || file.name.includes('.JSON'));
      if (binFile) {
        formData.append('bin', binFile);
      }
      if (jsonFile) {
        formData.append('json', jsonFile);
      }
      formData.append('start', String(range[0]));
      formData.append('length', String(range[1] - range[0]));
      const response = await axios.post('http://127.0.0.1:8000/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setChartData(response.data.channel0_array.map((element: number, index: number) => (
        { name: index + range[0], value: element }
      )));
      setLoading(false);
      console.log(response);

      data = response.data.channel0_array;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const saveAs = (blob: any, fileName: string) => {
    const url = window.URL.createObjectURL(blob);

    const anchorElem = document.createElement('a');
    anchorElem.style.display = 'none';
    anchorElem.href = url;
    anchorElem.download = fileName;

    document.body.appendChild(anchorElem);
    anchorElem.click();

    document.body.removeChild(anchorElem);

    // On Edge, revokeObjectURL should be called only after
    // a.click() has completed, atleast on EdgeHTML 15.15048
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
  };

  const handleSave = () => {
    const b = new Blob(data, { type: 'application/octet-stream' });
    const fileName = 'teste.bin';
    saveAs(b, fileName);
  };

  return (
    <Container>
      <SideBar>
        <Title>Neuronella</Title>
        <Menu
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => { }}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<FileOutlined />} title="Files">
            {files.map((file: any, index) => <Menu.Item key={`file${index}`}>{file.name}</Menu.Item>)}
          </SubMenu>
        </Menu>
        <FileInput onChange={handleFileSelected} type="file" multiple />
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
              <InputNumber style={{ width: '50px' }} value={range[0]} onChange={(value: number) => { setRange([value, range[1]]); }} />
              <Slider
                range={{ draggableTrack: true }}
                min={0}
                max={(300000 / 30000)}
                defaultValue={[0, (300000 / 30000)]}
                onChange={(value: [number, number]) => { setRange(value); }}
                value={range}
              />
              <InputNumber style={{ width: '50px' }} value={range[1]} onChange={(value: number) => { setRange([range[0], value]); }} />
            </SliderContainer>
            Total:
            {' '}
            {range[1] - range[0]}
            {' segundos'}
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
          <Button type="primary" onClick={handleDecompose}>Decompose</Button>
          <Button onClick={handleSave} disabled={chartData.length <= 0}>Save</Button>
        </TopMenuSection>
      </TopMenu>
      <Graphs>
        {loading ? (<Spin />) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={chartData}
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
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Graphs>
    </Container>
  );
}

export default MainView;
