import {useEffect, useState} from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  // useEffect - act the same as componentDidMount, componentDidUpdate, and componentWillUnmount
  // if the argument inside the array changes, the function is called. Otherwise, the fucntion will not be called.
  // In case of an object, function will be called as each object will be unique even though it may contain the same values as others.
  useEffect(() => {
    console.log('resource >>', resource);
    console.log('useEffect is called!');
    fetchResources(resource);
  }, [resource]);

  return resources;
};

export default useResources;
