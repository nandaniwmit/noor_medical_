import { CheckCircle2, Target, Eye, Heart, Milestone, Users, Award, ShieldAlert, Star } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    {
      title: 'Safety First',
      description: 'We rigorously cross-verify prescriptions and examine chemical dosages to protect patient health from medication conflicts.',
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: '100% Genuineness',
      description: 'We completely reject unverified sources. Every capsule and device in our store has clear batch-level authenticity.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: 'Compassionate Care',
      description: 'We treat local families as neighbors. We prioritize critical medicine delivery for elderly, bedridden, and chronic patients.',
      icon: <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation in AP Colony',
      desc: 'Noor Medical was founded in Gaya with the goal of providing genuine and certified medical supplies to families in the area.',
    },
    {
      year: '2022',
      title: 'Cold-Chain Cold Storage Setup',
      desc: 'Established state-of-the-art refrigerators to keep critical cardiac drops, eye formulations, and insulins fully active at stable 2-8°C.',
    },
    {
      year: '2024',
      title: 'Free AP Colony Doorstep Delivery',
      desc: 'Introduced free medicine deliveries for chronic care patients, helping bedridden elders receive medications with a simple WhatsApp list.',
    },
    {
      year: '2026',
      title: 'Digital Stock Checker launch',
      desc: 'Rolled out our custom stock checking system to help local residents verify medicine quantities and MRPs instantly before walking in.',
    },
  ];

  return (
    <div className="space-y-24 pb-20 pt-28" id="about-page-container">
      <SEO 
        title="About Us - Our Story & Pharmacy Ethics" 
        description="Learn about Noor Medical in Gaya, Bihar. Explore our health mission, core vision, timeline of achievements, owner message, and why we are trusted." 
        path="/about"
      />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full">
          Gaya's Standard Medical Pharmacy
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About Noor Medical
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Driven by medical ethics, we ensure standard storage, direct sourcing, and prescription verification for every family in AP Colony, Gaya.
        </p>
      </section>

      {/* Business Story & Owner Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider pl-2 border-l-2 border-emerald-500">
              Our Roots
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              The Journey to Safe Healthcare in Gaya
            </h2>
          </div>
          
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
            <p>
              In recent years, the pharmaceutical market has faced challenges with unauthorized channels, counterfeit capsules, and degraded efficacy from improper room temperature exposures. Noor Medical was founded in Gaya, Bihar, with the primary intention to combat these healthcare risks at a local scale.
            </p>
            <p>
              We realized that families in residential colonies like A P Colony need more than just a shop counter; they deserve a highly specialized health partner. That is why we systematically built our pharmacy with strict dust-proof shelving, high-capacity backup generators to power cooling systems, and professional pharmacist oversight.
            </p>
            <p>
              Today, we have grown to be the first point of contact for chronic-care therapies. From heart diseases and neurological treatments to daily baby wellness and diagnostic devices, our catalog is managed with strict quality checks.
            </p>
          </div>
        </div>

        {/* Owner Message Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-emerald-100/50 dark:border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-emerald-500/5 blur-xl"></div>
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>

            <blockquote className="text-slate-700 dark:text-slate-300 italic text-sm leading-relaxed text-justify">
              "Medicines are not commodities; they are critical instruments of life. Our sole objective at Noor Medical is ensuring that when a daughter comes to pick up diabetic medication for her father, she returns home with absolute assurance of safety and genuineness."
            </blockquote>

            <div className="flex items-center space-x-3.5 pt-4 border-t border-emerald-200/50 dark:border-slate-800">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shadow-md shadow-emerald-600/10">
                NM
              </div>
              <div>
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">Pharmacist Noor</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest mt-0.5">Founder & chief pharmacist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision & Core Values */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed text-justify">
              To supply 100% authentic, high-quality pharmaceutical medications and health devices to Gaya residents, ensuring temperature-stable storage and verified dispensing standards to enhance chronic disease management.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed text-justify">
              To be the most trustworthy and technologically accessible neighborhood health partner in Bihar, known for zero compromise on medicine genuineness, prompt home delivery, and safe patient advocacy.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl text-center space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-2xl w-fit mx-auto">
                  {val.icon}
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white">{val.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="timeline">
        <div className="space-y-2 text-center">
          <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-2xl w-fit mx-auto text-emerald-600">
            <Milestone className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Our Journey Timeline</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            A look back at how we steadily grew our service standards to better protect healthcare in Gaya.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-emerald-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Year Bubble */}
              <div className="absolute -left-4 md:-left-[5rem] top-1.5 bg-emerald-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                {item.year}
              </div>
              
              {/* Node indicator */}
              <div className="absolute -left-1.5 top-2.5 w-3.5 h-3.5 bg-white dark:bg-slate-950 border-2 border-emerald-500 rounded-full group-hover:bg-emerald-500 transition-colors"></div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-800 dark:text-white text-base leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Store Overview Features */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-16" id="achievements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">
            Achievements & Pharmacy Standards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">5,000+ Families</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-normal">
                  Trusted medical suppliers for families across AP Colony, Gaya.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">100% Certified</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-normal">
                  Sourced exclusively from WHO-GMP compliant depots and distributors.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
                <CheckCircle2 className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">24/7 Priority Prep</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-normal">
                  Pre-ordered prescription bags pre-sorted so you have zero queues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
