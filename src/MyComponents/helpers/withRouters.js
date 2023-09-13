import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (component) => {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <component {...props} location={location} navigate={navigate} params={params} />;
  };
};

export default withRouter;
