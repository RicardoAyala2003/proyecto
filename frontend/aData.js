const churchData = {
  // Church basic information
  churchInfo: {
    name: "Iglesia Ebenezer Wentzville",
    address: "1404 W Meyer Rd, Wentzville, MO 63385",
    phone: "+1 (636) 791-3512",
    email: "contacto@iglesia.com",
    mapsurl: "https://maps.app.goo.gl/71V6M1ufKjx3Sysx8",
    mapsUrlEmbeded: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.302479687738!2d-90.88120492387216!3d38.82553297173955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dec7daf113dfbf%3A0x368e2b044c117898!2s1404%20W%20Meyer%20Rd%2C%20Wentzville%2C%20MO%2063385%2C%20EE.%20UU.!5e0!3m2!1ses!2shn!4v1737666252187!5m2!1ses!2shn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
  },

  //   SocialMedia
  socialMedia: {
    facebook: "https://www.facebook.com/ebenezerwentzville",
    instagram: "https://www.instagram.com/ebenezerwentzville",
    youtube: "https://www.youtube.com/channel/UCXv4O5KcZd1ZQJ1JbU5J2jA",
    twitter: "https://twitter.com/ebenezerwentz",
  },

  // Services schedule
  services: [
    {
      day: "Domingo",
      time: "10:00",
      type: "Servicio Principal",
    },
    {
      day: "Miércoles",
      time: "19:00",
      type: "Estudio Bíblico",
    },
  ],

  // Ministry leaders
  leaders: [
    {
      name: "Pastor Juan Pérez",
      role: "Pastor Principal",
      contact: "pastor@iglesia.com",
    },
  ],

  // Events
  events: [
    {
      title: "Conferencia Juvenil",
      date: "2024-02-15",
      time: "18:00",
      description: "Evento para jóvenes",
      location: "Auditorio Principal",
    },
  ],

  // Announcements
  announcements: [
    {
      title: "Campaña de Oración",
      content: "Únete a nuestra campaña de oración esta semana",
      date: "2024-02-10",
    },
  ],
};

export default churchData;
