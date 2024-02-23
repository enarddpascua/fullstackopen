import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (contact) => {
  const request = axios.post(baseUrl, contact);
  return request.then((res) => res.data);
};

const deletePerson = (personId) => {
  let deleteUrl = `${baseUrl}/${personId}`;
  const request = axios.delete(deleteUrl);
  return request.then((res) => res.data);
};

const updatePerson = (contact) => {
  let updateUrl = `${baseUrl}/${contact.id}`;
  const request = axios.put(updateUrl, contact);
  return request.then((res) => res.data);
};

export default { getAll, create, deletePerson, updatePerson };
