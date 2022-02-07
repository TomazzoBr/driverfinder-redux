const baseUrl = "http://localhost:3001";

const fetchData = async (endpoint, method, id, data) => {
  return await fetch(baseUrl + endpoint + (id && `/${id}`), {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.status !== 204 ? response.json() : null;
        }
        throw new Error(
          "Error " + response.status + ": " + response.statusText
        );
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .catch((error) => console.error(error));
};

export const middleware = (store) => (next) => (action) => {
  if (action.type !== "FETCH_DATA") return next(action);
  store.dispatch({ type: "LOADING" });
  fetchData(
    action.endpoint,
    action.method,
    action.id && action.id,
    action.payload && action.payload
  )
    .then((data) => {
      store.dispatch({
        type: action.dispatch,
        payload: data,
        id: action.id,
      });
    })
    .catch((error) =>
      store.dispatch({
        type: "FAILED",
        error: error.message,
      })
    );
};
