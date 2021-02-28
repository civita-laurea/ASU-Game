import React from 'react';

const useStateWithLocalStorage = locatStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(locatStorageKey) || ''
  );
  
  React.useEffect(() => {
    localStorage.setItem(locatStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const App = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'token'
  );
   
  const onChange = event => setValue(event.target.value);
  
  return (
    <div>
      <h1>Local Storage</h1>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};

export default App;
