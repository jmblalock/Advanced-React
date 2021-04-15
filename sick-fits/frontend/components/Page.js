import propTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  // children: propTypes.arrayOf(propTypes.node)
  // children: propTypes.oneOf([
  //   propTypes.arrayOf(propTypes.node),
  //   propTypes.node,
  // ]),
  children: propTypes.any,
};
