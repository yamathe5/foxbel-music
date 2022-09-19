export let FetchAllAlbumsData = () => {
  return fetch("http://localhost:4000/api/songs").then((data) =>
    data.json().then((data) => {
      return data.body;
    })
  );
};
