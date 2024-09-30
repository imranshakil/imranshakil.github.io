import React, {useState} from 'react';
import MainLayout from "../layout/mainLayout";

const Home = () => {
    const [secret, setSecret] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem('secKey', secret);
        // setSecret('');
    };
    // {localStorage.setItem('secKey', secret)}


    return (
        <MainLayout/>
        // <>
        //     { secret === "112233" ?
        //         <>
        //
        //         </>
        //         :
        //         <section id="auth" className="d-flex flex-column justify-content-center align-items-center">
        //             <form onSubmit={handleSubmit}>
        //                 <div className="hero-container" data-aos="fade-in">
        //                     {/*<input type="text" class="form-control" value={secret} onChange={event => setSecret(event.target.value)} />*/}
        //                     <input type="text" class="form-control" value={secret} onChange={event => setSecret(event.target.value)}/>
        //                     <div id="emailHelp" class="form-text">Please enter a passcode to access the content</div>
        //                 </div>
        //                 <button type="submit" className="btn btn-primary">Submit</button>
        //             </form>
        //         </section>
        //     }
        // </>
    )
}
export default Home