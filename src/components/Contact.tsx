import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("access_key", "82b6ef42-3fef-4f1d-8cfd-ea522aad74e2");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    const json = JSON.stringify(Object.fromEntries(form.entries()));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll respond shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: res.message || "Please try again later.",
        });
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description: "Unable to send message. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-sanika-lightgray to-white animate-on-scroll"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto">
            Get in touch with our team to discuss your requirements or to learn
            more about our services. We're here to help you find the perfect
            plastic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel p-8 transition-all duration-500 transform hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-sanika-darkgray">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sanika-darkgray mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sanika-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sanika-darkgray mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sanika-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sanika-darkgray mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sanika-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:translate-y-[-5px]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="glass-panel p-8 transition-all duration-500 transform hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-sanika-darkgray">
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-sanika-blue/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-sanika-blue" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sanika-darkgray mb-2">
                    Corporate Office
                  </h4>
                  <p className="text-sanika-gray">
                    Gat No-565/2, Koregaon Bhima,
                    <br />
                    Pune-Nagar Road, Pune-412208
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-sanika-blue/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-sanika-blue" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sanika-darkgray mb-2">
                    Phone
                  </h4>
                  <p className="text-sanika-gray">02137-252600</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-sanika-blue/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-sanika-blue" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sanika-darkgray mb-2">
                    Email
                  </h4>
                  <p className="text-sanika-gray">
                    sanikaplast2010@gmail.com
                    <br />
                    Sanikaplast.marketing@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
