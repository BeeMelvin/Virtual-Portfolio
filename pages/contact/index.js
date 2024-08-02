import { useState, useEffect } from 'react';
import { BsArrowRight, BsTelephone, BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (submitted) {
      document.title = 'Response submitted!';
      setTimeout(() => {
        document.title = 'Your Website Title'; // Reset to your website title after a few seconds
      }, 3000);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message when user starts typing
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(`Name: ${formData.name}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Email: ${formData.email}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Subject: ${formData.subject}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Message: ${formData.message}`),
              ],
            }),
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, 'formData.docx');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setSubmitted(true);
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Connect With <span className='text-accent'>Me.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className='text-red-500'>{errors.name}</p>}
              <input
                type='text'
                name='email'
                placeholder='email'
                className='input'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              className='input'
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className='text-red-500'>{errors.subject}</p>}
            <textarea
              name='message'
              placeholder='message'
              className='textarea'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className='text-red-500'>{errors.message}</p>}
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Send
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mt-12 text-left'
          >
            <div className='flex items-center mb-4'>
              <BsTelephone className='text-accent mr-4' />
              <span>0671457497</span>
            </div>
            <div className='flex items-center mb-4'>
              <BsEnvelope className='text-accent mr-4' />
              <span>Boikanyo Malepe</span>
            </div>
            <div className='flex items-center'>
              <BsGeoAlt className='text-accent mr-4' />
              <span>South Africa,</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
