import React, { ReactElement } from 'react';
import { Upload, Button } from 'antd';
import { Container, Card } from './styles';

function ViewBoilerplate(): ReactElement {
  return (
    <Container>
      <Card>
        <header>
          Testee
        </header>
        <Upload>
          <Button>Clica aqui em pf!!</Button>
        </Upload>
      </Card>
    </Container>
  );
}

export default ViewBoilerplate;
