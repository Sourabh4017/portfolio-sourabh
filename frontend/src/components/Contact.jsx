import React, { useState } from 'react';
import axios from 'axios';

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post((import.meta.env.VITE_API_BASE || 'http://localhost:5000') + '/api/contact', form);
      if (res.data.success) {
        setStatus({ ok:true, msg:'Message sent' });
        setForm({ name:'', email:'', message:'' });
      } else {
        setStatus({ ok:false, msg: res.data.error || 'Failed' });
      }
    } catch (err) {
      setStatus({ ok:false, msg: err.message });
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form onSubmit={submit} className="max-w-lg grid gap-3">
        <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your name" className="p-2 border rounded" />
        <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Your email" className="p-2 border rounded" />
        <textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message" rows="6" className="p-2 border rounded" />
        <button className="py-2 px-4 bg-blue-600 text-white rounded">Send</button>
        {status && <p className={status.ok ? 'text-green-600' : 'text-red-600'}>{status.msg}</p>}
      </form>
    </section>
  );
}
