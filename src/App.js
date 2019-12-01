import React from 'react';

// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">
//                     bar
//                 </label>
//                 <input type="text" onClick={() => {console.log("I am clicked!")}}/>
//             </React.Fragment>
//         )
//     }
// }

const App =() => {
  const profiles = [
    { name:"Taro", age: 10 },
    { name:"Hanako", age: 5 },
    { name:"NoOne"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
        }
    </div>
  )
}

const User =(props) => {
  return <div>Hi, I am {props.name}, {props.age} years old! </div>
}

User.defaultProps = {
  age: 1
}

export default App;
