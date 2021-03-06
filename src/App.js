import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';

import friends from './components/FriendList/friend-list.json';
import FriendList from './components/FriendList/FriendList';

import statisticalData from './components/Statistics/statistics.json';
import Statistics from './components/Statistics/Statistics';

import transactions from './components/TransactionHistory/transactions-history.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


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
      
      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
}