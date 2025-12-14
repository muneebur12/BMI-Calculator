import BMICalculator from './components/BMICalculator';
import BMITables from './components/BMITables';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent mb-4">
            BMI Health Calculator
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Calculate your Body Mass Index and understand your health status
            with age-specific reference ranges
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center mb-12">
          <div className="w-full flex justify-center">
            <BMICalculator />
          </div>
        </div>

        <div className="flex justify-center">
          <BMITables />
        </div>

        <div className="mt-12 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-4xl mx-auto border border-teal-200">
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            About BMI Calculator
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Body Mass Index (BMI) is a measure of body fat based on height and
            weight that applies to adult men and women. This calculator provides
            age-specific BMI categories because healthy BMI ranges can vary
            across different life stages. Remember that BMI is just one
            indicator of health and doesn't account for muscle mass, bone
            density, or overall body composition. Always consult with healthcare
            professionals for personalized health advice.
          </p>
        </div>
      </div>
      <footer className="mt-12 py-4 border-t border-teal-300 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-700 text-sm">
              © {new Date().getFullYear()} BMI Health Calculator. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Developed with ❤️ for your health
            </p>
          </div>
        </footer>
    </div>
  );
}

export default App;
