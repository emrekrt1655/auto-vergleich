const commonStyles = {
  textColor: "text-gray-700 dark:text-gray-300",
  titleTextColor: "text-neutral-700 dark:text-neutral-300",
  wrapperColor: "dark:bg-neutral-950 bg-white",
  dashboardTextColor: "text-brand-neutral-dark dark:text-brand-neutral",
};

export const footerClasses = {
  footerWrapper: `${commonStyles.wrapperColor} ${commonStyles.textColor}`,
};

export const landingSecondary = {
  wrapper: "py-20 bg-gray-50 dark:bg-[#111] text-center px-6",
  titleText: `text-3xl font-bold ${commonStyles.titleTextColor} mb-6`,
  textColor: commonStyles.textColor,
  featuresWrapper:
    "p-6 bg-white dark:bg-[#1b1b1b] rounded-xl text-center shadow-md",
};

export const landingPrimary = {
  wrapperColor: commonStyles.wrapperColor,
  titleText: commonStyles.titleTextColor,
  textColor: commonStyles.textColor,
  featuresWrapperColor: "bg-gray-50 dark:bg-[#1b1b1b]",
};

export const navbarClasses = {
  wrapperColor: `${commonStyles.wrapperColor} border-gray-200 dark:border-gray-900`,
  textColor: commonStyles.textColor,
};

export const dashboardClasses = {
  textColor: commonStyles.dashboardTextColor,
  wrapperColor: "bg-gray-50 dark:bg-[#1b1b1b]",
};

export const carFormClasses = {
  wrapperColor: "bg-gray-50 dark:bg-[#1b1b1b]",
  textColor: commonStyles.dashboardTextColor,
  placeHolderColor: "placeholder:text-gray-400 dark:placeholder:text-gray-500",
};

export const resultClasses = {
  wrapperColor:
    "bg-linear-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 shadow-sm",
  titleColor: "text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2",
  textColorPrimary: "text-gray-800 dark:text-gray-200 mb-3",
  textColorSecondary: "font-semibold text-blue-700 dark:text-blue-300",
};
