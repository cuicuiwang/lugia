import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import TIMEPICKER from '@lugia/lugia-web/dist/time-picker/lugia.time-picker.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseDemo =  require('./BaseDemo').default;  const FormatDemo =  require('./FormatDemo').default;  const ControlledDemo =  require('./ControlledDemo').default;  const DisabledDemo =  require('./DisabledDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'时间选择器'} subTitle={'TimePicker'} desc={'用于时间选择,'} />
                              <Demo title={'基本'} titleID={'time-picker-0'} code={<code>{ `
                              <EditTables dataSource={TIMEPICKER} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本'} href={'#time-picker-0'} /><Link title={'时间格式'} href={'#time-picker-1'} /><Link title={'受控组件'} href={'#time-picker-2'} /><Link title={'禁用'} href={'#time-picker-3'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   
        