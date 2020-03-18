
//Action Creator
export const selectSong = song => {
    //Reeturn an action 
    return {
       type: 'SONG:SELECTED',
       payload: song
    };
};
