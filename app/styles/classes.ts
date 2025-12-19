const commonStyles = {
  textColor: "text-gray-700 dark:text-gray-300",
  titleTextColor: "text-neutral-700 dark:text-neutral-300",
  wrapperColor: "dark:bg-neutral-950 bg-white"
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
  featuresWrapperColor: "bg-gray-50 dark:bg-[#1b1b1b]"
};

export const navbarClasses = {
  wrapperColor: `${commonStyles.wrapperColor} border-gray-200 dark:border-gray-900`,
  textColor: commonStyles.textColor
}
