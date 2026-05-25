import { Baby, Users, Heart } from 'lucide-react';

export default function BMITables() {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-teal-200">
        <div className="flex items-center mb-6">
          <Baby className="w-8 h-8 text-cyan-700 mr-3" />
          <h3 className="text-2xl font-bold text-slate-800">
            Children & Adolescents (Under 18)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300 bg-teal-100/60">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  BMI Range
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  Category
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  Health Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  Below 14.0
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Severely Underweight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Requires medical attention
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  14.0 - 18.4
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Underweight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Below healthy weight
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  18.5 - 24.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Normal Weight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Healthy weight range
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  25.0 - 29.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Overweight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Above healthy weight
                </td>
              </tr>
              <tr className="hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  30.0 and above
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Obese
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Health risks present
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-teal-200">
        <div className="flex items-center mb-6">
          <Users className="w-8 h-8 text-emerald-700 mr-3" />
          <h3 className="text-2xl font-bold text-slate-800">
            Adults (18-64 years)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300 bg-teal-100/60">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  BMI Range
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  Category
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  Health Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  Below 18.5
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Underweight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Below healthy weight
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  18.5 - 24.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Normal Weight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Healthy weight range
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  25.0 - 29.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Overweight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Increased health risks
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  30.0 - 34.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Obese Class I
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  High health risks
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  35.0 - 39.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    Obese Class II
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Very high health risks
                </td>
              </tr>
              <tr className="hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  40.0 and above
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-900 rounded-full text-sm font-medium">
                    Obese Class III
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Extremely high health risks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-teal-200">
        <div className="flex items-center mb-6">
          <Heart className="w-8 h-8 text-teal-700 mr-3" />
          <h3 className="text-2xl font-bold text-slate-800">
            Seniors (65+ years)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300 bg-teal-100/60">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  BMI Range
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  Category
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-800">
                  Health Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  Below 23.0
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Underweight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Risk of frailty
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  23.0 - 29.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Normal Weight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Healthy weight range
                </td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  30.0 - 34.9
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Overweight
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Moderate health risks
                </td>
              </tr>
              <tr className="hover:bg-teal-100/40 transition-colors duration-150">
                <td className="py-4 px-4 font-medium text-slate-800">
                  35.0 and above
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Obese
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-700">
                  Increased health risks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-teal-100 rounded-lg border border-teal-300">
          <p className="text-sm text-slate-800">
            <span className="font-semibold">Note:</span> For seniors, slightly
            higher BMI values may be associated with better health outcomes and
            reduced mortality risk.
          </p>
        </div>
      </div>
    </div>
  );
}
