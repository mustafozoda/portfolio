export const formatPath = (pathname) => {
  return pathname === "/"
    ? "Home"
    : pathname
      .split("/")
      .filter(Boolean)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" > ");
};

export const getBreadcrumb = (pathname) => {
  const path = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" > ");

  return `Portfolio > ${path || "Home"}`;
};
