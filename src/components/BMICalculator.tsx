import { useState } from 'react';
import {
  Ruler,
  Weight,
  Zap,
  Heart,
  TrendingUp,
  ChevronDown,
  Users,
  Calendar,
} from 'lucide-react';

interface BMIResult {
  bmi: number;
  category: string;
  bgColor: string;
  barColor: string;
  textColor: string;
  barPercentage: number;
}

export default function BMICalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('');
  const [heightCm, setHeightCm] = useState<string>('');
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    let heightInMeters = 0;
    let weightInKg = 0;
    const ageNum = parseInt(age);

    if (unit === 'metric') {
      heightInMeters = parseFloat(heightCm) / 100;
      weightInKg = parseFloat(weight);
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const totalInches = ft * 12 + inches;
      heightInMeters = (totalInches * 2.54) / 100;
      weightInKg = parseFloat(weight) / 2.20462;
    }

    if (!heightInMeters || !weightInKg || !ageNum || heightInMeters === 0) {
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const bmiRounded = Math.round(bmi * 10) / 10;

    let category = '';
    let bgColor = '';
    let barColor = '';
    let textColor = '';
    let barPercentage = 0;

    if (ageNum < 18) {
      if (bmi < 14) {
        category = 'Severely Underweight';
        bgColor = 'bg-red-50';
        barColor = 'bg-red-600';
        textColor = 'text-red-600';
        barPercentage = 15;
      } else if (bmi < 18.5) {
        category = 'Underweight';
        bgColor = 'bg-orange-50';
        barColor = 'bg-orange-500';
        textColor = 'text-orange-600';
        barPercentage = 25;
      } else if (bmi < 25) {
        category = 'Normal Weight';
        bgColor = 'bg-green-50';
        barColor = 'bg-green-500';
        textColor = 'text-green-600';
        barPercentage = 50;
      } else if (bmi < 30) {
        category = 'Overweight';
        bgColor = 'bg-orange-50';
        barColor = 'bg-orange-500';
        textColor = 'text-orange-600';
        barPercentage = 70;
      } else {
        category = 'Obese';
        bgColor = 'bg-red-50';
        barColor = 'bg-red-600';
        textColor = 'text-red-600';
        barPercentage = 90;
      }
    } else if (ageNum >= 18 && ageNum < 65) {
      if (bmi < 18.5) {
        category = 'Underweight';
        bgColor = 'bg-orange-50';
        barColor = 'bg-orange-500';
        textColor = 'text-orange-600';
        barPercentage = 20;
      } else if (bmi < 25) {
        category = 'Normal Weight';
        bgColor = 'bg-green-50';
        barColor = 'bg-green-500';
        textColor = 'text-green-600';
        barPercentage = 50;
      } else if (bmi < 30) {
        category = 'Overweight';
        bgColor = 'bg-orange-50';
        barColor = 'bg-orange-500';
        textColor = 'text-orange-600';
        barPercentage = 65;
      } else if (bmi < 35) {
        category = 'Obese Class I';
        bgColor = 'bg-red-50';
        barColor = 'bg-red-600';
        textColor = 'text-red-600';
        barPercentage = 75;
      } else if (bmi < 40) {
        category = 'Obese Class II';
        bgColor = 'bg-red-50';
        barColor = 'bg-red-700';
        textColor = 'text-red-700';
        barPercentage = 85;
      } else {
        category = 'Obese Class III';
        bgColor = 'bg-red-50';
        barColor = 'bg-red-800';
        textColor = 'text-red-800';
        barPercentage = 95;
      }
    } else {
      if (bmi < 23) {
        category = 'Underweight';
        bgColor = 'bg-orange-50';
        barColor = 'bg-orange-500';
        textColor = 'text-orange-600';
        barPercentage = 25;
      } else if (bmi < 30) {
        category = 'Normal Weight';
        bgColor = 'bg-green-50';
        barColor = 'bg-green-500';
        textColor = 'text-green-600';
        barPercentage = 55;
      } else if (bmi < 35) {
        category = 'Overweight';
        bgColor = 'bg-orange-50';
        barColor = 'bg-orange-500';
        textColor = 'text-orange-600';
        barPercentage = 70;
      } else {
        category = 'Obese';
        bgColor = 'bg-red-50';
        barColor = 'bg-red-600';
        textColor = 'text-red-600';
        barPercentage = 85;
      }
    }

    setResult({
      bmi: bmiRounded,
      category,
      bgColor,
      barColor,
      textColor,
      barPercentage,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 w-full max-w-4xl border border-teal-200">
      <div className="flex items-center justify-center mb-8">
        <div className="p-2 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg mr-3 shadow-md">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">BMI Calculator</h2>
      </div>

      <div className="flex gap-2 mb-8 p-1 bg-teal-100 rounded-lg border border-teal-200">
        <button
          type="button"
          onClick={() => {
            setUnit('metric');
            setResult(null);
          }}
          className={`flex-1 py-2 px-4 rounded font-semibold transition-all duration-200 ${
            unit === 'metric'
              ? 'bg-white text-teal-700 shadow-md border border-teal-300'
              : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          Metric (cm/kg)
        </button>
        <button
          type="button"
          onClick={() => {
            setUnit('imperial');
            setResult(null);
          }}
          className={`flex-1 py-2 px-4 rounded font-semibold transition-all duration-200 ${
            unit === 'imperial'
              ? 'bg-white text-teal-700 shadow-md border border-teal-300'
              : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          Imperial (ft/lbs)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-teal-200 text-teal-700 rounded-full mr-2">
              <Users className="w-3.5 h-3.5" />
            </span>
            Gender
          </label>
          <div className="relative">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors duration-200 appearance-none bg-white pr-10 hover:border-teal-400"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-emerald-200 text-emerald-700 rounded-full mr-2">
              <Calendar className="w-3.5 h-3.5" />
            </span>
            Age (years)
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors duration-200 hover:border-teal-400"
            placeholder="Enter your age"
            required
            min="1"
            max="120"
          />
        </div>

        {unit === 'metric' ? (
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-cyan-200 text-cyan-700 rounded-full mr-2">
                <Ruler className="w-3.5 h-3.5" />
              </span>
              Height (cm)
            </label>
            <div className="relative">
              <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500 pointer-events-none" />
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors duration-200 hover:border-teal-400"
                placeholder="170"
                required
                min="50"
                max="300"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-800 flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-cyan-200 text-cyan-700 rounded-full mr-2">
                <Ruler className="w-3.5 h-3.5" />
              </span>
              Height
            </label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500 pointer-events-none" />
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors duration-200 hover:border-teal-400"
                  placeholder="5"
                  required
                  min="0"
                  max="10"
                />
                <p className="text-xs text-slate-600 mt-2 font-medium">Feet</p>
              </div>
              <div className="flex-1 relative">
                <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500 pointer-events-none" />
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors duration-200 hover:border-teal-400"
                  placeholder="8"
                  required
                  min="0"
                  max="11"
                />
                <p className="text-xs text-slate-500 mt-2 font-medium">Inches</p>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-teal-200 text-teal-700 rounded-full mr-2">
              <Weight className="w-3.5 h-3.5" />
            </span>
            Weight ({unit === 'metric' ? 'kg' : 'lbs'})
          </label>
          <div className="relative">
            <Weight className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500 pointer-events-none" />
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors duration-200 hover:border-teal-400"
              placeholder={unit === 'metric' ? '70' : '154'}
              required
              min="10"
              max={unit === 'metric' ? '500' : '1100'}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Calculate BMI
        </button>
      </form>

      {result && (
        <div className={`mt-8 p-6 ${result.bgColor} rounded-xl border-2 border-slate-300 shadow-md`}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-5 h-5 ${result.textColor}`} />
                <p className="text-sm font-semibold text-slate-800">
                  Your BMI Score
                </p>
              </div>
              <p className={`text-4xl font-bold ${result.textColor}`}>
                {result.bmi}
              </p>
            </div>

            <div className="w-full bg-slate-300 rounded-full h-5 overflow-hidden shadow-inner border border-slate-400">
              <div
                className={`${result.barColor} h-full rounded-full transition-all duration-700 ease-out`}
                style={{ width: `${result.barPercentage}%` }}
              />
            </div>

            <div className="flex justify-between mt-3">
              <span className="text-xs font-semibold text-slate-700">
                ● Underweight
              </span>
              <span className="text-xs font-semibold text-slate-700">
                ● Normal
              </span>
              <span className="text-xs font-semibold text-slate-700">
                ● Obese
              </span>
            </div>
          </div>

          <div className="text-center pt-4 border-t-2 border-slate-400">
            <p className={`text-2xl font-bold ${result.textColor}`}>
              {result.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
