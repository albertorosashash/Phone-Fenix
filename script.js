const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

const testimonials = [
  {
    quote:
      '"Pensaba cambiar mi celular, pero con el mantenimiento y la batería nueva quedó excelente."',
    name: "Mariana R. | Zona Angelópolis",
  },
  {
    quote:
      '"Me explicaron todo antes de reparar el centro de carga y me entregaron el equipo el mismo día."',
    name: "José L. | Centro de Puebla",
  },
  {
    quote:
      '"El trato fue súper claro. Revivieron mi Samsung después de una falla por humedad."',
    name: "Paola S. | Centro de Puebla",
  },
  {
    quote:
      '"Llevé mi iPhone por cambio de pantalla y quedó muy bien. La atención fue rápida y amable."',
    name: "Daniela M. | La Paz",
  },
  {
    quote:
      '"Me gustó que primero revisaron el equipo y luego me dieron precio sin rodeos. Muy recomendables."',
    name: "Ricardo T. | Huexotitla",
  },
  {
    quote:
      '"Mi celular ya no cargaba y en Phone Fenix me ayudaron el mismo día. Todo quedó funcionando."',
    name: "Fernanda C. | San Manuel",
  },
  {
    quote:
      '"Buen servicio para mantenimiento preventivo. El teléfono quedó más fluido y con mejor batería."',
    name: "Arturo V. | Analco",
  },
  {
    quote:
      '"La explicación fue honesta y eso me dio confianza. Se nota que sí cuidan el equipo del cliente."',
    name: "Sofía P. | Centro Sur",
  },
];

const quoteElement = document.getElementById("testimonial-quote");
const nameElement = document.getElementById("testimonial-name");
const indexElement = document.getElementById("testimonial-index");
const testimonialButtons = document.querySelectorAll("[data-direction]");

let currentTestimonial = 0;

function renderTestimonial(index) {
  if (!quoteElement || !nameElement) {
    return;
  }

  quoteElement.textContent = testimonials[index].quote;
  nameElement.textContent = testimonials[index].name;

  if (indexElement) {
    indexElement.textContent = String(index + 1);
  }
}

testimonialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentTestimonial += button.dataset.direction === "next" ? 1 : -1;

    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1;
    }

    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }

    renderTestimonial(currentTestimonial);
  });
});

const form = document.querySelector(".contact-form");
const message = document.getElementById("form-message");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const device = (data.get("device") || "").toString().trim();

    message.textContent = name
      ? `${name}, recibimos tu solicitud${device ? ` para ${device}` : ""}. Te contactaremos en breve para confirmar tu diagnóstico.`
      : "Recibimos tu solicitud. Te contactaremos en breve para confirmar tu diagnóstico.";

    form.reset();
  });
}
