import { useLocation, useParams } from "react-router-dom";

const Blogs = () => {
  let location = useLocation();
  let params = useParams()
  console.log(location, params)
  return <div><h1 className="text-orange-900 text-center bg-zinc-300">Blog Articles</h1>
    <h1 className="text-orange-900 text-center">{params.id}</h1>
    <h1 className="text-orange-900 text-center">{location.state?.other  || ""}</h1>
  </div>;
};

export default Blogs;