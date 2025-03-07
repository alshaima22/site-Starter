import { Menu } from "@/types/menu";
import { useTranslation } from "react-i18next";

const useMenuData = (): Menu[] => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t("menu.home"),
      newTab: false,
      path: "/",
    },
    {
      id: 3,
      title: t("menu.aboutUs"),
      newTab: false,
      path: "/#about-us",
    },
    {
      id: 2,
      title: t("menu.services"),
      newTab: false,
      path: "/#features",
    },    {
      id: 6,
      title: t("menu.projects"),
      newTab: false,
      path: "/#projects",
    },
    {
      id: 5,
      title: t("menu.faq"),
      newTab: false,
      path: "/#faq",
    },

    {
      id: 4,
      title: t("menu.support"),
      newTab: false,
      path: "/#support",
    },
  ];
};

export default useMenuData;
