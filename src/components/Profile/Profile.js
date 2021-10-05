import PropTypes from 'prop-types';
import './profile.css';
import defaultImg from './default-cat.png';


export default function Profile ({
    name,
    tag,
    location,
    avatar = defaultImg,
    stats,
}) {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className="profile__avatar"
                />
                <p className="profile__name">{name}</p>
                <p className="profile__tag">@{tag}</p>
                <p className="profile__location">{location}</p>
            </div>

            <ul className="profile__stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};



Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};