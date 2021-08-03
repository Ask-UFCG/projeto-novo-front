import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;

@observer
class RegrasComunidadeForm extends React.Component {
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
            <Col span={24}>
              <Card
                style={{
                  alignContent: 'center',
                  boxShadow: '1px 1px #888888',
                }}
              >
                lutpat erat. Aenean nec auctor elit. Pellentesque nec volutpat
                nisi. Donec consectetur tempor est, ac luctus purus porta non.
                Morbi ac lectus sollicitudin, viverra augue sed, ornare sem.
                Phasellus maximus massa sapien, eget aliquam dolor lobortis
                dapibus. Mauris convallis, neque non molestie consequat, diam
                ligula bibendum orci, sit amet blandit urna purus quis nunc.
                Aliquam at tempus lectus. Donec vitae turpis ac elit ultrices
                pretium. Vivamus vel laoreet tellus. Pellentesque metus turpis,
                semper eget arcu in, rhoncus scelerisque quam. Pellentesque
                posuere eget diam sodales volutpat. Ut eu purus a nibh tempus
                maximus. Vestibulum dignissim, nunc vitae consequat eleifend,
                purus ligula porttitor velit, eu dapibus elit turpis nec sem.
                Praesent a ante at metus efficitur vestibulum. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Morbi at
                libero urna. Sed at erat bibendum, blandit nunc auctor,
                elementum turpis. Sed lectus risus, vulputate sed tincidunt eu,
                placerat at dolor. Nullam egestas nisi molestie est varius,
                vitae faucibus velit vestibulum. Nulla fringilla ante et rutrum
                viverra. Vivamus mattis orci urna, nec porttitor elit congue
                ullamcorper. Pellentesque non dapibus sapien. Suspendisse mattis
                dapibus tellus ut luctus. Proin consectetur auctor tempus.
                Aliquam tincidunt finibus orci non dapibus. Curabitur vestibulum
                venenatis vulputate. Suspendisse non luctus sapien. Cras iaculis
                tincidunt nulla, a condimentum justo. Etiam porta sem non
                elementum vestibulum. Aenean a risus massa. Pellentesque in
                libero vel tellus efficitur pellentesque eget id nisl. Cras
                placerat ipsum a nibh vehicula, sed hendrerit massa efficitur.
                Integer in arcu molestie, hendrerit mi vel, consequat arcu. Sed
                faucibus erat ut ipsum ultrices dignissim. Donec vestibulum,
                quam semper hendrerit ultricies, erat eros efficitur orci, et
                suscipit ante felis non urna. Duis a dolor quis ex facilisis
                interdum. Vivamus
              </Card>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} />
          </Row>
        </Content>
      </>
    );
  }
}

export default RegrasComunidadeForm;
