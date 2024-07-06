/* eslint-disable react/prop-types */
import styles from "./index.module.css";
export const Button = ({ outline = false, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${outline ? styles.outline_btn : styles.primary_btn} ${
        styles.btn
      }`}
    >
      {icon}
      {text}
    </button>
  );
};
