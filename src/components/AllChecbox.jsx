
import React, { useEffect, useState } from "react";


const userData = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  
];

function AllCheckbox() {
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState([])

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    

    const { name, checked, value } = e.target;
    console.log(checked,'checked')
    if (name === "allSelect") {
      console.log(value, 'name')
      setValues([...values,...value])
      console.log(values,'values')
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      console.log(name, 'name')
      setValues([...values,name])
      console.log(values,'values')
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }

    if(checked === false && name !== 'allSelect')
    {
      console.log(checked,'false',value)
      const index = (values.lastIndexOf(value))
      console.log(index,'index of unchecked')
          values.splice(index,1)
          setValues(values)
          console.log(values,'values unchecked')
    }
    else if(checked === false && name === 'allSelect'){
      console.log("checked === false && name === 'allSelect'")
      
      console.log(values,'1111')
      values.splice(4,-1)
      setValues(values)
      console.log(values,'2222')
    }
  };

  return (
    <div >
      <form >
        
        <div >
          <input
            type="checkbox"
            value={['ABCD']}
            name="allSelect"
            
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label >All Select</label>
        </div>
        {users.map((user, index) => (
          <div  key={index}>
            <input
              type="checkbox"
              name={user.name}
              value={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label >{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default AllCheckbox;