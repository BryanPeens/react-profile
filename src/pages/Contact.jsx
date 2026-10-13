import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://getform.io/f/zbzkxdga', { method: 'POST', body: formData });
      if (!response.ok) throw new Error('Message could not be sent.');
      setForm({ name: '', email: '', phone: '', message: '' });
      setStatus('success');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <section className="page-intro">
        <div className="page-wrap">
          <span className="eyebrow">Contact</span>
          <h1 className="display-title">Have a good one? <span>Let’s talk.</span></h1>
          <p>Tell me a little about what you’re working on. I’m always glad to connect with thoughtful people and interesting teams.</p>
        </div>
      </section>
      <section className="contact-layout page-wrap">
        <div className="contact-details">
          <h2>Start a conversation.</h2>
          <p>For roles, collaborations, or a quick hello, send a note and I’ll get back to you.</p>
          <div className="contact-detail"><span>LinkedIn</span><a href="https://www.linkedin.com/in/bryan-peens-558113204/" target="_blank" rel="noreferrer">Connect with Bryan ↗</a></div>
          <div className="contact-detail"><span>GitHub</span><a href="https://github.com/BryanPeens" target="_blank" rel="noreferrer">github.com/BryanPeens ↗</a></div>
          <div className="contact-detail"><span>Based in</span><strong>Canada</strong></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" value={form.name} onChange={handleChange} required /></div>
            <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required /></div>
          </div>
          <div className="form-field"><label htmlFor="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} /></div>
          <div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" value={form.message} onChange={handleChange} required /></div>
          <button className="button-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span></button>
          {status === 'success' && <p className="form-status" role="status">Thanks for reaching out. Your message has been sent.</p>}
          {status === 'error' && <p className="form-status error" role="alert">Your message could not be sent right now. Please try again or email me directly.</p>}
        </form>
      </section>
    </>
  );
}