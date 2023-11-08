

const Notice = (props) => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '2px',
        marginBottom: '10px',
        padding: '5px',
    }
    return (
        <div className={`bg-${props.type}`} style={style} id="notice">
            {props.message}
        </div>
    );
}

export default Notice;