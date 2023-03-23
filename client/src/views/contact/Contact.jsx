import "./Contact.css";
import linkedin from "../../assets/linkedin.gif";

const nosotros = [
  {
    name: "Nicolas Galarce",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/nicolasgalarce",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/bn0s6mjsznayb61mpby1.jpg ",
    email: "nicolasgalarce18@gmail.com",
    github: "https://github.com/nicogalarce7"
  },
  {
    name: "Juan Lofredo",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/juan-lofredo",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/y9zklwm80w1wvd7ukkaf.jpg ",
    email: "juanlofredocs6sj@gmail.com",
    github: "https://github.com/juanbalofredo"
  },
  {
    name: "Nicolas Piantini",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-piantini",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/ikq7bvdtfgjutzrkngtq.jpg ",
    email: "nicolaspiantini@gmail.com",
    github: "https://github.com/pianti10"
  },
  { name: "Bautista Godoy",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/bautista-godoy",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/elnqm56o7f8qgjmsaser.jpg",
    email: "nicolaspiantini@gmail.com",
    github: "https://github.com/baugod"
  },
  { name: "Daniel Martel Chavez", 
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/daniel-martel-chavez-866481238",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1679550770/lppnasm2vcyjryk75263.png",
    email: "danyel.martel@gmail.com",
    github: "https://github.com/cTerryc"
  },
  { name: "Francisco Di Nucci",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/francisco-di-nucci-931454247 ",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1679550706/bohfeepsfltngqroh7sc.jpg",
    email: "franciscoldinucci@gmail.com",
    github: "https://github.com/pacodinucci"
  },
  { name: "Alex Añiasco", 
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/alex-huaitiao-a%C3%B1asco-b75225267 ",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/dhmittvit3gi4fas3fmn.jpg ",
    email: "alexaniasco@outlook.com",
    github: "https://github.com/alexaniasco"
  },
];
const TeamMemberCard = () => {
  return (
    <>
      <div className="container_contacts">
        {nosotros.map((e, k) => {
          return (
            <div className="card-container">
              <div className="card-top-part" key={k}>
                <div className="user-photo-contact">
                  <img src={e.imagen} className="photo-asasff-" alt="Image" />
                </div>
                <div className="user-name-contac" key={k}>
                  <p className="text">{e.name}</p>
                    <div className="user-position">
                      <p className="position">{e.carrera}</p>
                    </div>
                  <div className="card-bottom-part">
                    <div className="bottom-part">
                      <a href={e.linkedin} className="link"  rel="noreferrer" target="_blank" >
                        <span className="icon">
                          <img src={linkedin} alt="linkedin" />
                        </span>
                      </a>
                    </div>
                    <div className="bottom-part">
                      <a href={e.github} className="link"   rel="noreferrer" target="_blank">
                        <span className="icon">
                        <svg fill="#000000" width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                              transform="translate(1.869 1.875)"
                              d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"
                              id="Fill"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="bottom-part">
                      <a href={"mailto:" + e.email} className="link">
                        <span className="icon">
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamMemberCard;
