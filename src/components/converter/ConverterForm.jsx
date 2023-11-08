import { useState } from "react";

const ConverterForm = (props) => {
    const platforms = props.platforms
    const [select1Value, setSelect1Value] = useState('')
    const [select2Value, setSelect2Value] = useState('')
    const [bookingCode, setBookingCode] = useState('')

    const submitTask = () => {
        console.log(select1Value, select2Value, bookingCode)

        // reset values to default
        setSelect1Value('')
        setSelect2Value('')
        setBookingCode('')
    }

    const handleSelect1Change = (event) => {
        const selectedValue = event.target.value;
        setSelect1Value(selectedValue)
        setSelect2Value('')
    }

    const handleSelect2Change = (event) => {
        const selectedValue = event.target.value;
        setSelect2Value(selectedValue)
    }

    const handleBookingCode = (event) => {
        const selectedValue = event.target.value;
        setBookingCode(selectedValue)
    }

    return (
        <form className="converter_form" action="">
            <fieldset className="convert_from">
                <label className="form-label" htmlFor="convert_from">Convert from</label>
                <select className="form-select" name="convert_from" id="convert_from" value={select1Value} onChange={handleSelect1Change}>
                    <option value="" disabled>Select platform</option>
                    {platforms.map((platform, index) => {
                        return <option key={index} value={ platform }>{platform}</option>
                    })}
                </select>
            </fieldset>
            
            <fieldset className="convert_to">
                <label className="form-label" htmlFor="convert_to">Convert to</label>
                <select className="form-select" name="convert_to" id="convert_to" value={select2Value} onChange={handleSelect2Change} disabled={select1Value === ''}>
                    <option value="" disabled>Select platform</option>
                    {platforms.map((platform, index) => {
                        return <option key={index} value={ platform } disabled={select1Value === platform}>{platform}</option>
                    })}
                </select>
            </fieldset>

            <fieldset className="booking_code">
                <label className="form-label" htmlFor="booking_code">Booking code</label>
                <input className="form-control" type="text" name="booking_code" id="booking_code" placeholder="enter booking code here" value={bookingCode} onChange={handleBookingCode}/>
            </fieldset>

            <button type="button" className="btn btn-primary" onClick={submitTask}>Convert</button>
        </form>
    );
}

export default ConverterForm;