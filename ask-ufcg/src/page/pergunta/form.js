import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import {
  Layout,
  Row,
  Input,
  Button,
  Form,
  Col,
  Card,
  Select,
  Option,
} from 'antd';
import PerguntaFormStore from '../../stores/pergunta/form';
import Pergunta from '../../domain/pergunta';
import PerguntaService from '../../services/pergunta';
import TextArea from 'antd/lib/input/TextArea';
import DadosEstaticosService from '../../utils/dadosEstaticosService';
const { Content } = Layout;

@observer
class PerguntaForm extends React.Component {
  constructor() {
    super();
    this.store = new PerguntaFormStore(Pergunta, PerguntaService, 'Pergunta');
  }
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <>
        <Content
          style={{
            textAlign: 'center',
            padding: '0 50px',
          }}
        >
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} />
            <Col span={24} className='center-content'>
              <Card
                title={<b>{'Crie uma nova Pergunta para nossa Comunidade!'}</b>}
                style={{
                  alignContent: 'center',
                  boxShadow: '1px 1px #888888',
                }}
              >
                <Form
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                >
                  <Form.Item>
                    <Row>
                      <Col span={24}>
                        <Select
                          mode='multiple'
                          style={{ width: '100%' }}
                          placeholder='Escolha as categorias'
                          options={DadosEstaticosService.getLabelsDisciplinas()}
                          maxTagCount={5}
                          onChange={(e) => {
                            this.store.updateAttributeDecoratorKeyValue(
                              'tags',
                              e
                            );
                          }}
                          listHeight={160}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <Row>
                      <Col span={24}>
                        <Input
                          placeholder={'Escreva um titulo que chama atenção'}
                          onChange={(value) =>
                            this.store.updateAttributeDecoratorKeyEventValue(
                              'email',
                              value
                            )
                          }
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <Row>
                      <Col span={24}>
                        <TextArea
                          placeholder={'Escreva um titulo que chama atenção'}
                          onChange={(value) =>
                            this.store.updateAttributeDecoratorKeyEventValue(
                              'email',
                              value
                            )
                          }
                          autosize={{ maxRows: 20, minRows: 20 }}
                          style={{
                            height: '224px',
                            maxHeight: '224px',
                            minHeight: '224px',
                          }}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <Row style={{ textAlign: 'right' }}>
                      <Button
                        type='primary'
                        htmlType='submit'
                        className='style-button'
                        size={'large'}
                      >
                        Cadastrar nova pergunta
                      </Button>
                    </Row>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} />
          </Row>
        </Content>
      </>
    );
  }
}

export default PerguntaForm;
