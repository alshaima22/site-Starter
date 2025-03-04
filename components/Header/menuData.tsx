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
      id: 2,
      title: t("menu.features"),
      newTab: false,
      path: "/#features",
    },
    {
      id: 2.1,
      title: t("menu.blog"),
      newTab: false,
      path: "/blog",
    },
    {
      id: 2.3,
      title: t("menu.docs"),
      newTab: false,
      path: "/docs",
    },
    {
      id: 3,
      title: t("menu.pages"),
      newTab: false,
      submenu: [
        {
          id: 31,
          title: t("menu.blogGrid"),
          newTab: false,
          path: "/blog",
        },
        {
          id: 35,
          title: t("menu.docs"),
          newTab: false,
          path: "/docs",
        },
        {
          id: 35.1,
          title: t("menu.support"),
          newTab: false,
          path: "/support",
        },
        {
          id: 36,
          title: t("menu.error"),
          newTab: false,
          path: "/error",
        },
      ],
    },
    {
      id: 4,
      title: t("menu.support"),
      newTab: false,
      path: "/support",
    },
  ];
};

export default useMenuData;
