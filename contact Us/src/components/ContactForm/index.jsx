import styles from "./index.module.css";
import { Button } from "../Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
const ContactForm = () => {

  const onViaCall = () => {
    console.log("via call");
  };
  const onViaEmail = () => {
    console.log("via email");
  };
  const onViaSupportChat = () => {
    console.log("via support chat");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            onClick={onViaSupportChat}
            icon={<MdOutlineMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
          <Button
            onClick={onViaCall}
            icon={<IoMdCall fontSize="24px" />}
            text="VIA CALL"
          />
        </div>
        <Button
          onClick={onViaEmail}
          outline={true}
          icon={<MdOutlineMessage fontSize="24px" />}
          text="VIA EMAIL FORM"
        />
        <form onSubmit={submitHandler}>
          <div className={`${styles.form_controller}`}>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />
          </div>
          <div className={`${styles.form_controller}`}>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
          </div>
          <div className={`${styles.form_controller}`}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={`${styles.contact_img}`}>
        <img src="./images/contactform.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;
