const { Fragment } = require('react');
import MainNavigation from './mainNavigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
