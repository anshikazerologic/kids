"use client"
import React, {useActionState, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {
  Bike,
  Check,
  Send,
  X,
  Award,
} from 'lucide-react';
import {feedbackForm} from "../app/content/home";
import {submitContact} from "./forms/actions";
export default function FeedbackForm () {
    const {
        headingLine1,
        headingLine2,
        ctaLabel,
        modalEyebrow,
        modalHeading,
        emailLabel,
        emailPlaceholder,
        messageLabel,
        messagePlaceholder,
        submitLabel,
        successHeading,
        successMessage,
        instagramUrl,
        youtubeUrl,
        facebookUrl,

    }= feedbackForm;
    const canUsePortal = typeof document !== 'undefined';

  const [state, formAction, isPending] = useActionState(submitContact, {
    status: "idle",
    message: "",
  });
  const [contactOpen, setContactOpen] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isSent, setIsSent] = useState(false);

  const brandBackground =
    'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=85';

     useEffect(() => {
    if (state.status === "success") {
      setIsSent(true);
      const t = setTimeout(() => {
        setIsSent(false);
        setContactOpen(false);
        setNameInput('');
        setEmailInput('');
        setMessageInput('');
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [state.status]);
    return (
         <div
      className="bg-white py-12 relative overflow-hidden flex flex-col justify-between"
      id="contact"
    >
      {/* Decorative top horizontal divider */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gray-100" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 relative z-10 flex flex-col justify-between space-y-12">
        {/* 1. TOP NAVBAR HEADER (Matches common system header exactly) */}

        {/* 2. CENTERED HAVE QUESTIONS HEADER COPY */}
        <div className="text-center space-y-6 pt-4">
          <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.1] max-w-2xl mx-auto">
            {headingLine1} <br />
            {headingLine2}
          </h2>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setContactOpen(true)}
              className="bg-[#18191b] hover:bg-indigo-600 hover:scale-[1.03] active:scale-[0.98] text-white font-semibold px-8 py-3.5 rounded-full text-base shadow-md transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
              id="footer-get-in-touch-btn"
            >
              <span>{ctaLabel}</span>
            </button>
          </div>
        </div>

        {/* 3. SOCIALS & SPORT OUTLINE ICONS ROW (Perfect alignment with margins) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-b border-gray-100 pb-8">
          {/* Left Sports Outline Icons */}
          <div className="flex items-center space-x-3.5">
            <div
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-400 transition-colors cursor-pointer bg-white shadow-3xs"
              title="Athletic networks"
            >
              {/* <Dribbble className="w-[18px] h-[18px]" /> */}
            </div>
            <div
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-400 transition-colors cursor-pointer bg-white shadow-3xs"
              title="Elite performance"
            >
              <Award className="w-[18px] h-[18px]" />
            </div>
            <div
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-400 transition-colors cursor-pointer bg-white shadow-3xs"
              title="Cycling systems"
            >
              <Bike className="w-[18px] h-[18px]" />
            </div>
          </div>

          {/* Right Social Media Outline Icons */}
          <div className="flex items-center space-x-3.5">
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-400 transition-colors cursor-pointer bg-white shadow-3xs"
              >
                {/* <Instagram className="w-[18px] h-[18px]" /> */}
              </a>
            )}
            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-400 transition-colors cursor-pointer bg-white shadow-3xs"
              >
                {/* <Youtube className="w-[18px] h-[18px]" /> */}
              </a>
            )}
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-400 transition-colors cursor-pointer bg-white shadow-3xs"
              >
                {/* <Facebook className="w-[18px] h-[18px]" /> */}
              </a>
            )}
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto mt-16 flex h-[300px] w-full items-center justify-center overflow-hidden bg-white px-4 sm:h-[460px] sm:px-8"
      >
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(175,211,248,0.35),transparent_34%),linear-gradient(135deg,#ffffff,#eef5ff)]" /> */}
        <div className="relative z-10 w-full">
          <h3
            className="w-full text-center font-display text-[28vw] font-black uppercase leading-[0.78] tracking-normal text-transparent sm:text-[24vw] lg:text-[18rem]"
            style={{
              backgroundImage: `url(${brandBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Kidz
          </h3>
        </div>
      </div>

      {/* 5. GORGEOUS CONTACT FORM MODAL (Draws when click "Get In Touch") */}
      {contactOpen &&
        canUsePortal &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
              aria-label="Close contact form"
            />

            {/* Modal Box */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative w-full max-w-lg z-10">
              {/* Close Button */}
              <button
                onClick={() => setContactOpen(false)}
                className="absolute right-5 top-5 p-2 rounded-full border border-gray-100 hover:border-slate-950 hover:bg-slate-950 hover:text-white transition-colors"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Header */}
              <div className="space-y-2 mb-8 pr-8">
                <span className="font-mono text-xs font-semibold text-[#afd3f8] uppercase tracking-widest block">
                  {modalEyebrow}
                </span>
                <h3 className="font-display font-medium text-3xl text-slate-950 leading-tight">
                  {modalHeading}
                </h3>
              </div>

              {/* Success Notification */}
              {isSent ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-950 text-lg">
                      {successHeading}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xs">
                      {successMessage}
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  action={formAction}
                  className="space-y-5"
                  id="footer-gorgeous-contact-form"
                >
                  {/* Only user-submitted fields (do not submit CMS/UI fields) */}
                  <input type="hidden" name="name" value={nameInput} />
                  <input type="hidden" name="email" value={emailInput} />
                  <input type="hidden" name="message" value={messageInput} />
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider block"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="John"
                      className="w-full bg-[#f8f9fa] border border-gray-200 focus:border-[#afd3f8] hover:border-gray-300 outline-none rounded-xl px-4 py-3.5 text-sm text-slate-900 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider block"
                    >
                      {emailLabel}
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder={emailPlaceholder}
                      className="w-full bg-[#f8f9fa] border border-gray-200 focus:border-[#afd3f8] hover:border-gray-300 outline-none rounded-xl px-4 py-3.5 text-sm text-slate-900 transition-colors"
                    />
                  </div>

                  {/* Message Area */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider block"
                    >
                      {messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder={messagePlaceholder}
                      className="w-full bg-[#f8f9fa] border border-gray-200 focus:border-[#afd3f8] hover:border-gray-300 outline-none rounded-xl px-4 py-3.5 text-sm text-slate-900 resize-none transition-colors"
                    />
                  </div>

                  {/* Submission Action */}
                  <div className="pt-4 flex">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-slate-950 hover:bg-indigo-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center space-x-2.5 transition-colors cursor-pointer group disabled:opacity-50"
                    >
                      <span>{isPending ? 'Sending...' : submitLabel}</span>
                      <Send className="w-4.5 h-4.5 text-indigo-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
    )
}