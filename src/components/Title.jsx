const Title = ({ title }) => {
  return (
    <h5 className="header-title d-flex align-items-center gap-2 mb-4">
      <span className="before"></span>
      {title}
    </h5>
  );
};

export default Title;
