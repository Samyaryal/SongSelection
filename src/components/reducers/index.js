export const songsReducer =() => {
    return [
        {title: 'NO Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:05'},
        {title: 'All Start', duration: '3:15'},
        {title: 'I want it That Way', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong= null, action) => {
    if(action.type ==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}