import styled from 'styled-components';
import { Layout } from 'antd';
import { blue } from '@ant-design/colors';

const { Header, Content } = Layout;

export const AppContainer = styled(Layout)`
  height: 100vh;
  display: flex;
`

export const AppHeader = styled(Header)`
  line-height: 64px;
  background: ${blue.primary};
`
export const AppTitle = styled.h1`
  color: #FFF;
  font-weight: bold;
`
export const AppContentWrapper = styled(Content)`
  padding: 10px 50px;
`
export const AppContent = styled.div`
  background: #FFF;
  padding: 24px;
  min-height: 280px;
`