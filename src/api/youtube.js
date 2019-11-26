const KEY="AIzaSyCsD7IaJ0v7IoOlfBGKyDJDrYYAl8KFQCI";
//const CHANNELID ="UCBTeMcwM9FGPxbnMccnep_A";
const MAXRESULTS = 50;

class YouTube
{
// http://localhost:3000/?channel=UCBTeMcwM9FGPxbnMccnep_A
static getYouTubeVideos = () =>
{   
    const urlParams = new URLSearchParams(window.location.search);
    const channelid = urlParams.get('channel');
    let url = 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=' + channelid +'&maxResults=' + MAXRESULTS +'&key=' + KEY;    
    let request = new Request(url, {method: "GET"});
    return fetch(request).then((response) => response.json()).catch(error => console.log(error));
}

}
export default YouTube;