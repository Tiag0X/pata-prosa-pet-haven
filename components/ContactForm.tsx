import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        pet: '',
        contact: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "555190450171";
        const text = `Olá Pata & Prosa! 👋%0A%0AMe chamo *${formData.name}* (Pet: ${formData.pet || 'N/A'}).%0A%0AMeu contato é: ${formData.contact}%0A%0AMensagem: ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');

        // Optional: Reset form or show success feedback (we're redirecting so keeping it simple is fine)
        setFormData({ name: '', pet: '', contact: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <section id="contato-form" className="py-20 bg-brand-cream/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display font-bold text-brand-dark">Envie uma Mensagem</h2>
                    <p className="text-gray-600 mt-2">Dúvidas, sugestões ou pedidos de agendamento? Estamos aqui para ouvir você.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-brand-green/10 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-brand-dark ml-1">Nome</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Seu nome"
                                className="w-full px-6 py-4 rounded-2xl bg-brand-cream border-transparent focus:border-brand-green focus:bg-white focus:ring-0 transition-all outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="pet" className="text-sm font-bold text-brand-dark ml-1">Nome do Pet</label>
                            <input
                                type="text"
                                id="pet"
                                value={formData.pet}
                                onChange={handleChange}
                                placeholder="Nome do seu amiguinho"
                                className="w-full px-6 py-4 rounded-2xl bg-brand-cream border-transparent focus:border-brand-green focus:bg-white focus:ring-0 transition-all outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="contact" className="text-sm font-bold text-brand-dark ml-1">E-mail ou Telefone</label>
                        <input
                            type="text"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            placeholder="Como podemos te retornar?"
                            className="w-full px-6 py-4 rounded-2xl bg-brand-cream border-transparent focus:border-brand-green focus:bg-white focus:ring-0 transition-all outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-brand-dark ml-1">Mensagem</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="O que você gostaria de nos dizer?"
                            className="w-full px-6 py-4 rounded-2xl bg-brand-cream border-transparent focus:border-brand-green focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-green text-white py-5 rounded-2xl font-extrabold text-lg shadow-xl shadow-brand-green/20 hover:opacity-95 transition-all flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99]"
                    >
                        <Send size={20} />
                        Enviar Mensagem no WhatsApp
                    </button>
                </form>
            </div>
        </section>
    );
};
