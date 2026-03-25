import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <div className="courses">
      {/* CONTENT */}
      <div className="courses-container">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-center">

          <h1 className="text-2xl font-bold mb-4">About Us</h1>

          <p className="text-gray-600">
            FlexiStudy is here to help students reach their academic dreams.
            We provide adaptive learning and inclusive education for all.
          </p>

        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 mt-16 pb-6">
        FlexiStudy © 2026
      </div>

    </div>
  );
}