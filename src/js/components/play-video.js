export const playVideoAnimation = () => {
  const toggleVideoBlock = document.querySelector(`[data-video="toggle"]`);
  const toggleVideoPoster = document.querySelector(`[data-video="poster"]`);
  const toggleVideoButton = document.querySelector(`[data-video="button"]`);
  const toggleVideo = document.querySelector(`[data-video="preview"]`);

  toggleVideoBlock.addEventListener('click', (e) => {
    if(toggleVideo.paused) {
      toggleVideoPoster.classList.add('video-block__over-image--active');
      toggleVideo.classList.add('video-block__preview--active');
      toggleVideoButton.classList.add('video-block__play--active');
      toggleVideo.play();
    } else {
      toggleVideoPoster.classList.remove('video-block__over-image--active');
      toggleVideo.classList.remove('video-block__preview--active');
      toggleVideoButton.classList.remove('video-block__play--active');
      toggleVideo.pause();
    }
  });
};
