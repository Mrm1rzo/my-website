import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineWork } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState(""); // Yangi maydon: foydalanuvchi nomi
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Foydalanuvchi nomini xabar matniga qo'shish
    const telegramMessage = `Yangi xabar:\n\n👤 Ism: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}\n\n💻 Foydalanuvchi nomi: @${username}`;

    const botToken = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
          }),
        }
      );
      if (response.ok) {
        setStatus("Xabaringiz yuborildi!");
        setName("");
        setUsername(""); // Foydalanuvchi nomini tozalash
        setEmail("");
        setMessage("");
      } else {
        setStatus("Xabarni yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      setStatus("Xabarni yuborishda xatolik yuz berdi.");
    }
  };
  return (
    <section id="contact" className="align-elements my-5">
      <h3 className="menu-title text-center text-4xl">Contact Me</h3>
      <div className="flex flex-col flex-wrap justify-between gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-5 rounded-3xl bg-info px-4 py-5 md:w-auto md:grow">
          <p className="flex flex-wrap items-center gap-2 text-xl font-bold text-base-300 dark:rounded-xl dark:text-base-100">
            <FaPhoneAlt /> Telephone number:
            <a href="tell: +998 91 040 27 07" className="font-medium">
              +998 91 040 27 07
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-2 text-xl font-bold text-base-300 dark:rounded-xl dark:text-base-100">
            <FaLocationDot /> Adress:
            <a href="" className="font-medium">
              Fergana
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-2 text-xl font-bold text-base-300 dark:rounded-xl dark:text-base-100">
            <MdEmail /> Email:
            <a
              target="_blank"
              href="email: mr.m1rzodev@gmail.com"
              className="break-words font-medium"
            >
              mr.m1rzodev@gmail.com
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-2 text-xl font-bold text-base-300 dark:rounded-xl dark:text-base-100">
            <MdOutlineWork /> Work hour:
            <span className="font-medium">Mon - Sat: 9:00 - 18:00</span>
          </p>
        </div>
        <div className="flex w-full flex-col gap-5 md:w-auto md:grow">
          <div className="flex w-full flex-wrap gap-5">
            <label className="input input-info flex grow items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-info flex grow items-center gap-2">
              <input
                type="email"
                className="grow"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <textarea
            className="textarea textarea-info h-48"
            placeholder="How can we help you?"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="btn btn-info" type="submit">
            Send mesage
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
