import './contact.scss';

export default function Contact() {
    return (
        <div className="parent-contact">
            <div className='contact'>
                <div className="contact-texts">
                    <b>Email Newsletter</b>
                    <h2>Subscribe for updates</h2>
                </div>
                <div className="contact-form">
                    <input type="text"
                        placeholder='Name'
                    />
                    <input type="text"
                        placeholder='Email'
                    />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}
