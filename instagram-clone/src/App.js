import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// function App() {
//   const [post] = useState(dummyData);
//   return (
//     <div className="App">
//       <SearchBar />
//       {post.map((userPost, index) => {
//         return (
//           <PostContainer key={index} post={userPost} />
//         );
//       })}
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  render () {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((userPost, i) => {
          return (
            <PostContainer key={i} post={userPost} />
          );
        })}
      </div>
    );
  }
}

export default App;
