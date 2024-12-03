import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const ContactForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Would Love to Hear From You!</h2>
      <form className="space-y-4">
        <div>
          <Input placeholder="Your Name" />
        </div>
        <div>
          <Input type="email" placeholder="Your Email" />
        </div>
        <div>
          <Textarea placeholder="Your Message" className="min-h-[150px]" />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;