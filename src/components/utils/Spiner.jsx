
const Spinner = (props) => {
    const size = props.size || '20px';
    const style = {'width': size, 'height': size, 'margin-right': '10px'};

    return (
        <div class="spinner-border" style={style} role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;