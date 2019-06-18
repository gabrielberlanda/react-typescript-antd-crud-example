export const imports = {
  'src/components/StatusIcon/StatusIcon.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-status-icon-status-icon" */ 'src/components/StatusIcon/StatusIcon.mdx'
    ),
}
