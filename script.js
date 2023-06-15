const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompts user to select media, pass it and play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        console.log('Something went wrong', error)
    }
}

button.addEventListener('click', async ()=>{
    // Disable Button
    button.disabled = true;
    // Starts Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

//onload
selectMediaStream();