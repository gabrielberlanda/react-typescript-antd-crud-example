import styled, { css } from 'styled-components';
import { Layout, Button, Card as AntCard, Row } from 'antd';

const { Header, Content } = Layout;

export const headerGradient = css`
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const AppContainer = styled(Layout)`
  height: 100vh;
  display: flex;
`

export const AppHeader = styled(Header)`
  ${headerGradient}
  display: flex;
`

export const SubHeader = styled(Row)`
  ${headerGradient}
  
  padding-right: 24px;

  .ant-page-header {
    background: transparent !important
  }

  .ant-page-header-title-view-title {
    color: #FFF
  }

  .ant-page-header-back-button {
    color: #FFF
  }

`

export const AppTitle = styled.h1`
  color: #FFF;
  font-weight: bold;
`
export const AppContentWrapper = styled(Content)`
  padding: 10px 50px;
`
export const AppContent = styled.div`
  padding: 24px;
  min-height: 280px;
`
export const Card = styled(AntCard)`
  border-radius: 10px;
`

export const FullWidthButton = styled(Button)`
  width: 100% !important;
`
