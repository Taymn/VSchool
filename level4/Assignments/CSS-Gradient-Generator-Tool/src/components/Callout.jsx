function Callout(props) {

    const { color1, color2, angle } = props


    return (
        <div className="callout">
            <div style={{ background: `linear-gradient(${angle}deg, ${color1}, ${color2} )` }} className='preview'></div>
            {props.children}
        </div>
    );
}

export default Callout;