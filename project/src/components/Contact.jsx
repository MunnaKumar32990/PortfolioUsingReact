import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { personalData } from '../utils/data';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-800" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Let's work together
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, 
                  and interesting collaborations. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Email</p>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{personalData.email}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Phone</p>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{personalData.phone}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Location</p>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{personalData.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent"
                      placeholder="Your Name"
                      id="name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-600 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Your Name
                    </label>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent"
                      placeholder="Your Email"
                      id="email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-600 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Your Email
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent"
                    placeholder="Subject"
                    id="subject"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 -top-2 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-600 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Subject
                  </label>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                    id="message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-600 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Your Message
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;