import {useEffect, useState} from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]); // if the argument inside the array changes, the function is called. Otherwise, the fucntion will not be called.  In case of an object, function will be called as each object will be unique even though it may contain the same values as others.

  return resources;
};

export default useResources;