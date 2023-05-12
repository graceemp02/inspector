import { Navigate } from 'react-router-dom'
import Layout from '../components/Layout';

const PrivateRoutes = () => {
  const id = localStorage.getItem("ins_id");
    return id ? <Layout /> : <Navigate to="/login" />;
}

export default PrivateRoutes

