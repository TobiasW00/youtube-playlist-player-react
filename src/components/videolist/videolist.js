import React from 'react';
import Style from './videolist.module.css';
export default class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playvideo:""}
    }

    playvideo = (videoid) =>
    {
        this.setState({playvideo:videoid});
    }

    showvideo = (videoid) =>{
      window.location = "https://www.youtube.com/watch?v=" + videoid;
    }



    render()
    {
        
        let videolist = this.props.items.map((item,i) =>
        {
            let snippet = item.snippet;
            let preview;
            if(this.state.playvideo === item.id.videoId)
            {
                let videourl = "https://www.youtube.com/embed/" + item.id.videoId + "?autoplay=1&mute=1";
                preview =<iframe width="320" height="180" src={videourl} frameBorder="0" allowFullScreen></iframe>
            }else
            {
                preview = <img src={snippet.thumbnails.medium.url} alt="Video anzeigen"/>
            }
            
            
        return(<div onMouseEnter={()=>this.playvideo(item.id.videoId)} className={Style.videoboxdiv} key={i}>
        <div onClick={()=>this.showvideo(item.id.videoId)} className={Style.header}><h2>{snippet.title}</h2></div>
        {preview}<div onClick={()=>this.showvideo(item.id.videoId)} className={Style.videodescription}>{snippet.description}</div></div>)
        });


        return(<div>{videolist}</div>);
    }
}