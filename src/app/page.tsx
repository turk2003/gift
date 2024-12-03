'use client'
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const correctPassword = '06092003';

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setStep(2); 
    } else {
      alert('ผิดอ่าาา เสียใจหว่ะะะ 😭');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300 p-5">
    {step === 1 && (
    <div className="flex flex-col items-center text-center space-y-10">
      <h1 className="text-3xl font-bold text-white">ใส่วันเกิดเค้า</h1>
      <input
        type="password"
        placeholder="วัน/เดือน/ปี (DDMMYYYY)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button
        onClick={handlePasswordSubmit}
        className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
      >
        ยืนยัน
      </button>
    </div>
  )}

      {step === 2 && (
        <div className="text-center space-y-5">
          <h1 className="text-3xl font-bold text-white">เซอร์ไพรส์!</h1>
          <img
            src="gift.png"
            alt="Gift Box"
            className="mx-auto w-48 h-48 animate-bounce"
            onClick={() => setStep(3)} 
          />
        </div>
      )}

      {step === 3 && (
        <div className="relative flex items-center justify-center w-1/2 h-1/2">
          <div className="absolute inset-0 bg-heart bg-cover bg-center animate-heart-effect"></div>
          <video
            autoPlay
            controls
            className="rounded-lg shadow-lg w-3/4"
            onEnded={() => setStep(4)}
          >
            <source src="/4.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-5">
          <h1 className="text-3xl font-bold text-white">เลือกของขวัญได้อย่างนึง</h1>
          <div className="flex justify-center space-x-4 py-6 ">
            <img
            src="gift.png"
            alt="Gift Box"
            className="mx-auto w-48 h-48 animate-bounce"
            onClick={() => setStep(3)} 
          />
            <img
            src="gift.png"
            alt="Gift Box"
            className="mx-auto w-48 h-48 animate-bounce"
            onClick={() => setStep(3)} 
          />
            <img
            src="gift.png"
            alt="Gift Box"
            className="mx-auto w-48 h-48 animate-bounce"
            onClick={() => setStep(3)} 
          />
            <img
            src="gift.png"
            alt="Gift Box"
            className="mx-auto w-48 h-48 animate-bounce"
            onClick={() => setStep(3)} 
          />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
