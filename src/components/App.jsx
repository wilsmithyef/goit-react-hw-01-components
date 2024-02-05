import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../utils/user.json';
import data from '../utils/data.json'


const { username, tag, location, avatar, stats } = user;


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
      >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      
      <Statistics title='UPLOAD STATS' stats={data} />
      
      
    </div>
  );
};


