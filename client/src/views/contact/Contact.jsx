import "./Contact.css";
import linkedin from "../../assets/linkedin.gif";
import email from "../../assets/email.png";
import github from "../../assets/github.png";

const nosotros = [
  {
    name: "Nicolas Galarce",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/nicolasgalarce",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/bn0s6mjsznayb61mpby1.jpg ",
    email: "bautista.godoy@outlook.com",
    github: "https://github.com/baugod"
  },
  {
    name: "Juan Lofredo",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-piantini",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/y9zklwm80w1wvd7ukkaf.jpg ",
    email: "bautista.godoy@outlook.com",
    github: "https://github.com/baugod"
  },
  {
    name: "Nicolas Piantini",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-piantini",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/ikq7bvdtfgjutzrkngtq.jpg ",
    email: "bautista.godoy@outlook.com",
    github: "https://github.com/baugod"
  },
  { name: "Bautista Godoy",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/bautista-godoy",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/elnqm56o7f8qgjmsaser.jpg",
    email: "bautista.godoy@outlook.com",
    github: "https://github.com/baugod"
  },
  { name: "Daniel Martel Chavez", 
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/nicolasgalarce",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/bn0s6mjsznayb61mpby1.jpg",
    email: "bautista.godoy@outlook.com",
    github: "https://github.com/baugod"
  },
  { name: "Francisco Di Nucci",
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/francisco-di-nucci-931454247 ",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/bn0s6mjsznayb61mpby1.jpg",
    email: "bautista.godoy@outlook.com",
    github: "https://github.com/baugod"
  },
  { name: "Alex Añiasco", 
    carrera: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/nicolasgalarce",
    imagen: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1678802496/dhmittvit3gi4fas3fmn.jpg ",
    email: "bautista.godoy@outlook.com",
    github: "https://github.com/baugod"
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
                  <img src={e.imagen} className="photo" alt="Image" />
                </div>
                <div className="user-name-contac" key={k}>
                  <p className="text">{e.name}</p>
                    <div className="user-position">
                      <p className="position">{e.carrera}</p>
                    </div>
                  <div className="card-bottom-part">
                    <div className="bottom-part">
                      <a href={e.linkedin} className="link">
                        <span className="icon">
                          <img src={linkedin} alt="linkedin" />
                        </span>
                        Linkedin
                      </a>
                    </div>
                    <div className="bottom-part">
                      <a href="tel: 0123456789" className="link">
                        <span className="icon">
                          <svg
                            viewBox="0 0 20 20"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="20"
                            id="_20"
                          >
                            <path
                              transform="translate(1.869 1.875)"
                              d="M14.381,16.25h-.106C2,15.544.249,5.179.006,2.019A1.874,1.874,0,0,1,1.731,0H5.175A1.243,1.243,0,0,1,6.337.787l.95,2.337a1.247,1.247,0,0,1-.275,1.35L5.681,5.818a5.875,5.875,0,0,0,4.738,4.75l1.356-1.344a1.25,1.25,0,0,1,1.356-.257l2.356.944a1.245,1.245,0,0,1,.769,1.163v3.3A1.877,1.877,0,0,1,14.381,16.25Zm-12.5-15a.625.625,0,0,0-.625.625v.05C1.545,5.648,3.4,14.375,14.343,15h.038a.625.625,0,0,0,.625-.589V11.075l-2.356-.944-1.794,1.781-.3-.038A6.733,6.733,0,0,1,5.429,8.553,8.171,8.171,0,0,1,4.381,5.7l-.038-.3L6.118,3.606,5.181,1.25Z"
                              id="Fill"
                            ></path>
                          </svg>
                        </span>
                        Github
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
