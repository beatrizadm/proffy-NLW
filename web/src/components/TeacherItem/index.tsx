import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/49699735?s=460&u=392d07dcec7a4434d42b2ee640c956c931c80c4a&v=4"
          alt="Beatriz Miranda"
        />
        <div>
          <strong>Beatriz Miranda</strong>
          <span>Programming</span>
        </div>
      </header>
      <p>
        Computer Science undergraduate student at Federal University of Campina
        Grande (UFCG).
        <br />
        <br />
        Always being curious and building things.
      </p>

      <footer>
        <p>
          Price/hour
          <strong>$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp Icon" />
          Contact
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
