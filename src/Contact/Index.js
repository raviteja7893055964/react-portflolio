import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";

/* ================= STYLES ================= */

const Container = styled.section`
  width: 100%;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    343deg,
    rgba(132, 59, 206, 0.08) 5%,
    rgba(132, 59, 206, 0) 70%
  );
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 12px;

  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;;

const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.card};
  padding: 36px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
`;

const baseInputStyles = `
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + "55"};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 16px;
  transition: all 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + "40"};
  }
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};   /* ✅ TEXT COLOR */
  caret-color: ${({ theme }) => theme.primary}; /* ✅ cursor color */
  border-radius: 12px;
  padding: 12px 16px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;


const ContactTextarea = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};   /* ✅ TEXT COLOR */
  caret-color: ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 12px 16px;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  border-radius: 14px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: white;

  background: linear-gradient(
    135deg,
    #843bce 0%,
    #a855f7 50%,
    #ec4899 100%
  );

  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.45);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(168, 85, 247, 0.6);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

/* ================= COMPONENT ================= */

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    type: "success",
    msg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mlgnnbzd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.current.from_name.value,
          email: form.current.reply_to.value,
          subject: form.current.subject.value,
          message: form.current.message.value,
        }),
      });

      if (!response.ok) throw new Error("Failed");

      setSnack({
        open: true,
        type: "success",
        msg: "✅ Message sent successfully!",
      });
      form.current.reset();
    } catch {
      setSnack({
        open: true,
        type: "error",
        msg: "❌ Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Have an opportunity or a question? Let’s connect and build something
          impactful.
        </Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput name="from_name" placeholder="Your Name" required />
          <ContactInput
            name="reply_to"
            type="email"
            placeholder="Your Email"
            required
          />
          <ContactInput name="subject" placeholder="Subject" required />
          <ContactTextarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          />

          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </ContactButton>
        </ContactForm>
      </Wrapper>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert severity={snack.type} variant="filled">
          {snack.msg}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
