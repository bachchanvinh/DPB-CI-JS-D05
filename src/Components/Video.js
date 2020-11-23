export function Video (props){
    return (
        <div className="Video">
            <iframe width="560px" height="315px" src={props.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}