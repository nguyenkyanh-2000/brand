export function generateBreadcrumbs(pathname) {
  let pathArray = pathname.split("/");
  pathArray = pathArray.filter((path) => path !== "");

  const breadcrumbs = pathArray.map((path, index) => ({
    href: "/" + pathArray.slice(0, index + 1).join("/"),
    label: path.charAt(0).toUpperCase() + path.slice(1),
  }));

  return breadcrumbs;
}
