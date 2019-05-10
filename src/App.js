import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    clickedFriends: []
  };

  countClick = id => {
    let clickedFriends = this.state.clickedFriends;
    if(clickedFriends.includes(id)){
      if(this.state.score > this.state.highscore)
      {
        this.setState({highscore: this.state.score})
      }
      this.setState({ clickedFriends: [], score: 0});
      return;

    }else{
      clickedFriends.push(id)

      if(clickedFriends.length === 12){
        this.setState({score: 12, clickedFriends: []});
        console.log('You Win');
        return;
      }
      this.setState({ friends, score: clickedFriends.length, clickedFriends });


    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    this.forceUpdate();
    // const shuffledArray = this.shuffle(friends);
    // this.setState = ({ friends: shuffledArray });
  }

  };


  // shuffle = (tempArray) => {
  //   for (let i = tempArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  //   }
  //   return tempArray;
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Heading score={this.state.score} highscore={this.state.highscore}></Heading>
        {this.state.friends.map(friend => (
          <FriendCard
            countClick={this.countClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
