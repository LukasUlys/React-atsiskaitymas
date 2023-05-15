import { createContext, useReducer, useEffect } from "react";

const PeopleContext = createContext();
const PeopleActionTypes = {
  get: 'get_all_people',
  add: 'add_new_people'
}

const reducer = (state, action) =>{
  switch(action.type){
    case PeopleActionTypes.get:
      return action.data;
    case PeopleActionTypes.add:
      fetch(`http://localhost:3000/people`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      });
      return [ ...state, action.data ];
    default: 
      return state;
  }
}

const PeopleProvider = ({ children }) => {

  const [people, setPeople] = useReducer(reducer, []);

  useEffect(()=>{
    fetch(`http://localhost:3000/people`)
      .then(res => res.json())
      .then(data => setPeople({
        type: PeopleActionTypes.get,
        data: data
      }));
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        people,
        PeopleActionTypes,
        setPeople
      }}
    >
      { children }
    </PeopleContext.Provider>
  );
}
 
export { PeopleProvider };
export default PeopleContext;