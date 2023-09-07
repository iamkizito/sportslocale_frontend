// import Auth from './auth/Auth'

// function Main(props) {
//     return (
//         <main id='main'>
//             <Auth/>
//         </main>
//     );
// }

// export default Main


function Main(props) {
    return (
        <main id='main'>
            {props.children}
        </main>
    );
}

export default Main