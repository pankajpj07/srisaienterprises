export const companyName = "Sri Sai Enterprises";

export const navItems = [
  { to: "home", label: "Home" },
  { to: "about-us", label: "About Us" },
  { to: "products", label: "Products" },
  { to: "services", label: "Services" },
  { to: "contact", label: "Contact" },
];
export const phoneNumber = "8929314014";
export const openWhatsApp = (
  message = "Hello, I'd like to inquire about your products. Can we have a chat"
) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};

export function makePhoneCall() {
  const url = `tel:${phoneNumber}`;
  window.location.href = url;
}
