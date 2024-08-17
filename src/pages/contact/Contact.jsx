import { Button } from 'react-day-picker';
import contact from '../../assets/contact.svg'
import toast from 'react-hot-toast';

const Contact = () => {
    const handleContact =(event) => {
        event.preventDefault();
        // Send form data to server
        toast.success('Thanks for contacting us')
        event.target.reset();
    }
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
            <div className="flex flex-col justify-between object-cover">
                
                <img src={contact} alt="contact" className="p-6 object-cover h-full w-full" />
            </div>
            <form onSubmit={handleContact} className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded border" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded border" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded border"></textarea>
                </div>
                <Button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-500 text-white">Send Message</Button>
            </form>
        </div>
    );
};

export default Contact;