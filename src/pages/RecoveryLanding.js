import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const RecoveryLanding = () => {
  const { language } = useContext(LanguageContext);
  const t = (uk, en) => (language === "uk" ? uk : en);

  return (
    <div className="pt-20 w-full text-white bg-black">
      {/* Section: 4.5.0 Meaning */}
      <section className="w-full min-h-screen flex flex-col justify-center px-6 py-20 bg-black text-green-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-6xl font-bold text-green-300 mb-6">
              4.5.0{" "}
              <span className="block text-3xl font-light mt-2">
                recovery center
              </span>
            </h1>
            <p className="text-white font-semibold mb-4">
              In military terminology, the code '4.5.0.' signifies “ALL IS
              QUIET”.
            </p>
            <p className="text-white">
              This name conveys the fundamental reassurance that individuals in
              need of help and medical intervention seek to hear –{" "}
              <strong>RELAX – EVERYTHING WILL BE FINE!</strong>
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white">The number "5"</h3>
              <p className="text-gray-300">
                is depicted as an upward arrow, symbolizing that at the center,
                visitors are assisted in “rising,” solving problems, feeling
                uplifted, and experiencing growth in strength and possibilities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">The number "0"</h3>
              <p className="text-gray-300">
                is associated with a survey icon, signifying that each visitor
                has their own history, unique characteristics, medical aspects,
                preferences, wishes, and possibly certain taboos. It’s a
                questionnaire where all individual aspects are taken into
                account. Unlike a hospital where the focus is solely on
                diagnoses and their solutions, we prioritize people! Their
                stories, perspectives, and thoughts matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Project Idea */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-green-300 mb-6">
              PROJECT
              <br />
              IDEA
            </h2>
            <p className="text-gray-400">
              A center for comprehensive health restoration, psychological
              well-being, and further self-realization of military personnel and
              individuals affected by war.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white text-black px-4 py-3 rounded shadow font-medium">
              It is the only center of this kind in the Transcarpathian region.
            </div>
            <div className="border border-white px-4 py-3 rounded">
              We have the best neurosurgery and physical rehabilitation doctors
              in Ukraine.
            </div>
            <div className="border border-white px-4 py-3 rounded">
              Multidisciplinary rehabilitation assistance is provided.
            </div>
            <div className="border border-white px-4 py-3 rounded">
              We offer socialization, psychological support, and adaptation.
            </div>
            <div className="border border-white px-4 py-3 rounded">
              We feature an operating ADC (Administrative Services Center).
            </div>
          </div>
        </div>
      </section>

      {/* Section: Multidisciplinary Assistance */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-green-100 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Multidisciplinary rehabilitation assistance includes work with:
            </h2>
          </div>
          <ul className="space-y-3 text-lg font-medium">
            <li>Prosthetics</li>
            <li>Pathologies of the spinal and cranial nerves</li>
            <li>
              Skeletal injuries and pathologies of the musculoskeletal system
            </li>
            <li>Burns</li>
            <li>Amputations</li>
            <li>Cardiorespiratory pathologies</li>
          </ul>
        </div>
      </section>

      {/* Section: Our Goal */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              {t("Наша ціль", "Our goal")}
            </h2>
            <p className="text-green-400 font-semibold mb-4">
              {t(
                "створити Центр, де пацієнти почуваються в безпеці, комфортно, спокійно та впевнено на кожному етапі контакту",
                "is to make the Center a place where the patients feel safe, convenient, calm, and confident at every point of contact with the Center."
              )}
            </p>
            <p className="text-gray-300">
              {t(
                "Ми прагнемо, щоб центр був наповнений потужними експертами, які не гають часу та беруться за найскладніші завдання. Ми прагнемо зменшити відчуття 'лікарні', враховуючи всі аспекти інклюзивності та можливих фізичних обмежень наших відвідувачів.",
                "We aim for it to be a center with powerful experts who don't waste time and take on the most challenging tasks to ensure a comfortable environment inside. We focus on minimizing the 'hospital' feeling considering all aspects of inclusivity and potential physical limitations of the Center's visitors."
              )}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow p-6 text-black text-center">
              <p className="uppercase tracking-wide font-bold">
                CENTER IS CREATED BY PEOPLE
                <br />
                FOR PEOPLE!
              </p>
              <div className="text-sm text-gray-500 mt-4">
                4.5.0 recovery center
              </div>
              <div className="flex justify-center gap-4 mt-2 text-2xl">
                ❤️ 👥
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Infrastructure Overview */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-green-100 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl font-bold mb-8">
              4.5.0
              <br />
              recovery center
            </h2>
          </div>
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <strong>~100</strong> bed spaces
            </li>
            <li>
              Estimated patient flow per year – <strong>2400</strong>;
              Outpatient – <strong>650</strong>
            </li>
            <li>
              Total area of the Center – <strong>5460 sq.m.</strong>
            </li>
            <li>
              Own shelter (bomb shelter) – <strong>350 sq.m.</strong>
            </li>
            <li>Municipal ownership</li>
            <li>
              Estimated project cost – <strong>400 million UAH</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Status */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <p className="text-green-400 text-lg mb-2">
              {t("Статус впровадження:", "Implementation status:")}
            </p>
            <h2 className="text-3xl font-bold">
              {t("Завершальний етап проєктування", "FINAL STAGE OF DESIGN")}
            </h2>
          </div>
          <div>
            <p className="text-green-400 text-lg mb-2">
              {t("Відкриття центру:", "Center launch:")}
            </p>
            <h2 className="text-5xl font-extrabold">
              {t("Кінець", "END OF")}{" "}
              <span className="text-green-300">2025</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecoveryLanding;
