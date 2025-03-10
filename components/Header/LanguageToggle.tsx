import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      aria-label="language toggler"
      onClick={toggleLanguage}
      className="bg-gray-2 dark:bg-dark-bg flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      <span style={{ color: "#666666" }}>
        {i18n.language === "en" ? "AR" : "EN"}
      </span>
    </button>
  );
};

export default LanguageToggle;
