import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-white via-amber-50/40 to-white px-4 sm:px-6 lg:px-8 py-4 md:py-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold uppercase tracking-[0.2em] text-sm sm:text-base">
            Our Teacher
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Meet Our Expert Educator
          </h1>

          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            At Vision Academy, students receive expert guidance with strong
            concept clarity, personal attention, and result-oriented teaching.
          </p>
        </div>

        {/* Teacher Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Side - Teacher Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-full min-h-[420px]">
              <Image
                src="/teacher/teacher.jpeg"
                alt="Teacher"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Teacher Details */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <span className="inline-block bg-amber-100 text-amber-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Mathematics & Physics Expert
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Prof. Vishal Sir
              </h2>

              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                With a passion for teaching and a strong academic background,
                Vishal Sir provides personalized coaching for students from 9th
                to 12th standard. His teaching style focuses on deep concept
                understanding, problem-solving skills, and excellent academic
                results in Mathematics and Physics.
              </p>

              {/* Qualification Box */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                  <p className="text-sm text-slate-500 font-medium">Qualification</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">B.Sc in Physic & Mathematics</h3>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                  <p className="text-sm text-slate-500 font-medium">Qualification</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">M.Sc in Physics & Mathematics</h3>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                  <p className="text-sm text-slate-500 font-medium">Qualification</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">B.Ed</h3>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                  <p className="text-sm text-slate-500 font-medium">Experience</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">10 Years</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}