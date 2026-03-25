import English from '../assets/english.jpg';
import Indonesia from '../assets/indonesia.jpg';
import Science from '../assets/science.jpg';


function Courses() {
  return (
    <section className="courses">
      <h2 style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
        Courses
      </h2>

      <div className="course-container">
        <div className="course-card">
          <img src={English} alt="English" />
          <button>Learn More</button>
        </div>

        <div className="course-card">
          <img src={Indonesia} alt="Indonesia" />
          <button>Learn More</button>
        </div>

        <div className="course-card">
          <img src={Science} alt="Science" />
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Courses;