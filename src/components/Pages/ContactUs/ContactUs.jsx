import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Contact <span className='text-orange-400'>Us</span>.</h1 >
            <p className='font-light mb-3 md:w-3/5 mx-auto text-center'>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form className='w-full md:w-3/5 mx-auto py-7'>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Email</span>

                    </label>
                    <input type="Email" placeholder="new@gmail.com" className="input input-bordered w-full" required />
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Subject</span>

                    </label>
                    <input type="Email" placeholder="Your Subject" className="input input-bordered w-full" required />
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your message</span>
                    </label>
                    <textarea type="Email" placeholder="Your Subject" className="w-full textarea textarea-bordered h-20" required />
                </div>

                <button className='btn btn-info'>Send Message</button>



            </form>
        </div>
    );
};

export default ContactUs;