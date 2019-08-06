import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Certification extends Component {
  constructor(props) {
    super(props);

    this.certifications = props.certifications;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="certifications">
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
          {
            this.certifications.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faAward} color="#ffc107" />
                <span className="ml-2"> {data.certificationDetail} </span>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Certification;
