
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  try {
    localStorage.setItem('videoplayer-current-time', seconds);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const throttlePlay = throttle(onPlay, 1000);

player.on('timeupdate', throttlePlay);

const getCurrentTime = function () {
  try {
    const getStorage = localStorage.getItem('videoplayer-current-time') || 0;
    return getStorage;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

player.setCurrentTime(getCurrentTime());