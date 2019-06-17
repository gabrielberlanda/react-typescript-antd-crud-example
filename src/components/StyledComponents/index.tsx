import styled, { css } from 'styled-components';
import { Layout, Button, Card as AntCard, Row } from 'antd';

const { Header } = Layout;
const AntContent = Layout.Content;

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
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0 24px !important;
`

export const SubHeader = styled(Row)`
  ${headerGradient}
  
  /* padding-right: 24px; */

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
export const AppContentWrapper = styled(AntContent)`
  /* padding: 10px 50px; */
  margin-top: 64px;
`
export const AppContent = styled.div`
  min-height: 280px;
  background-color: #f0f2f5;
`

export const Content = styled(AppContent)`
  padding: 24px;
`

export const Card = styled(AntCard)`
  border-radius: 10px;
`

export const FullWidthButton = styled(Button)`
  width: 100% !important;
`
