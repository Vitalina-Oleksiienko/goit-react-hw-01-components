import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';

//import friends from './friends.json';
//import FriendList from './components/Friends/FriendList';

//import statisticalData from './statistical-data.json';
//import StatList from './components/Statistics/Statistics';

//import transaction from './transactions.json';
//import TransactionHistory from './components/Transaction/Transaction';


export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
    </div>
  );
}