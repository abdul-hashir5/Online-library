
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
   <div className="not-found">
  <h1>404</h1>
  <p>Page Not Found</p>
  <Link to="/">Go Back Home</Link>
</div>
  );
}

export default NotFound;