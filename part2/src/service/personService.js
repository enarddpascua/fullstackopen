import axios from "axios";

const baseUrl = "/api/persons";

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
  let request = axios.delete(deleteUrl);
  return request.then(() => getAll());
};

const updatePerson = (contact) => {
  let updateUrl = `${baseUrl}/${contact.id}`;
  const request = axios.put(updateUrl, contact);
  return request.then((res) => res.data);
};

export default { getAll, create, deletePerson, updatePerson };
