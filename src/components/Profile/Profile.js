import PropTypes from 'prop-types';
import './Profile.css';
import defaultImg from './default-cat.png';

export default function Profile({
    name,
    tag,
    location,
    avatar = defaultImg,
    stats,
}) {
    return (
    <div class="profile">
        <div class="description">
            <img
                src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
                alt="Аватар пользователя"
                class="avatar"
            />
                <p class="name">Petra Marica</p>
                <p class="tag">@pmarica</p>
                <p class="location">Salvador, Brasil</p>
        </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">3000</span>
                </li>
            </ul>
    </div>
    )
}







Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};